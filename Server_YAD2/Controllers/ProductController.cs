using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server_YAD2.Data;
using Server_YAD2.Models;

namespace Server_YAD2.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            var Products = await _context.Products
                .OrderByDescending(x => x.Price)
                .ThenByDescending(d => d.PublishDate)
                .Join(_context.Owners,
                product => product.OwnerId,
                owner => owner.Id,
                (product, owner) => new { Product = product, Owner = owner })
                .Select(p => new
                {
                    p.Product.Id,
                    p.Product.Name,
                    p.Product.PublishDate,
                    p.Product.Image,
                    p.Product.Price,
                    OwnerId = p.Owner.Id,
                    OwnerName = p.Owner.Name,
                    p.Owner.PhoneNumber,
                    p.Owner.City,
                })
                .ToListAsync();

            return Ok(Products);
        }
        [HttpDelete("{Pid}")]
		public async Task<IActionResult> DeleteProduct(int PId)
        {
            var ProductToDelete = await _context.Products.FirstOrDefaultAsync(x => x.Id == PId);
            if (ProductToDelete != null)
            {
                _context.Products.Remove(ProductToDelete);
                _context.SaveChanges();
                return Ok(ProductToDelete);
            }
            return BadRequest();
        }
	

		[HttpPost]
        public async Task<IActionResult> AddProduct([FromBody]Product p)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var newProduct = new Product
            {
                Name = p.Name,
                PublishDate = DateTime.Now,
                Image = p.Image,
                Price = p.Price,
                OwnerId = p.OwnerId
            };
           await _context.Products.AddAsync(newProduct);
           await _context.SaveChangesAsync();

           return Ok(newProduct);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateProduct(Product p ,int id)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }
            var UpdatedProduct = await _context.Products.FindAsync(id);
            if (UpdatedProduct == null)
            {
                return NotFound();
            }
            UpdatedProduct.Name = p.Name;
            UpdatedProduct.PublishDate = DateTime.Now;
            UpdatedProduct.Image = p.Image;
            UpdatedProduct.Price = p.Price;
            UpdatedProduct.OwnerId = p.OwnerId;

            await _context.SaveChangesAsync();
            return Ok(UpdatedProduct);

        }

		[HttpGet("{Id}")]
		public async Task<ActionResult<Product>> getProductById(int Id)
		{
			return Ok(await _context.Products.FindAsync(Id));

		}

	}
}
