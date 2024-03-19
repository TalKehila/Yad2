using System.ComponentModel.DataAnnotations.Schema;

namespace Server_YAD2.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateTime PublishDate { get; set; }
        public string Image { get; set; } = string.Empty;
        public double Price { get; set; }
        [ForeignKey(nameof(Owner.Id))]
        public int OwnerId { get; set; }
        

    }
}
