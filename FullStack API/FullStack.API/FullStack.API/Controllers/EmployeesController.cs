using FullStack.API.Data;
using FullStack.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("/api/employees")]
    public class EmployeesController : Controller
    {
        private readonly FullStackDbContext context;

        public EmployeesController(FullStackDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            var employees = await context.Employees.ToListAsync();
            return Ok(employees);
        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid id)
        {
            var employee = await context.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if (employee != null)
            {
                return Ok(employee);
            }

            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> CreateEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();

            await context.Employees.AddAsync(employeeRequest);
            await context.SaveChangesAsync();

            return Created("/api/employees", employeeRequest);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, Employee employeeRequest)
        {
            var employee = await context.Employees.FindAsync(id);

            if (employee != null)
            {
                employee.Name = employeeRequest.Name;
                employee.Email = employeeRequest.Email;
                employee.Phone = employeeRequest.Phone;
                employee.Salary = employeeRequest.Salary;
                employee.Department = employeeRequest.Department;

                await context.SaveChangesAsync();

                return Ok(employee);
            }

            return NotFound();
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await context.Employees.FindAsync(id);

            if (employee != null)
            {
                context.Employees.Remove(employee);
                await context.SaveChangesAsync();

                return Ok(employee);
            }

            return NotFound();
        }
    }
}
