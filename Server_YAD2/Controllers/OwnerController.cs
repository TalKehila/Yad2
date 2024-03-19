using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server_YAD2.Data;
using Server_YAD2.Models;

namespace Server_YAD2.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OwnerController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Owner>>> GetAllUsers()
        {
            return Ok(await _context.Owners.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody]Owner o)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var owner = new Owner
            {
                Name = o.Name,
                PhoneNumber = o.PhoneNumber,
                City = o.City,
            };
            await _context.AddAsync(owner);
            await _context.SaveChangesAsync();

            return Ok(owner);
        }

        [HttpGet("{OwnerId}")]
        public async Task<ActionResult<Owner>> getOwnerById (int OwnerId)
        {
            return Ok(await _context.Owners.FindAsync(OwnerId));
        }
        

        
    }
}
