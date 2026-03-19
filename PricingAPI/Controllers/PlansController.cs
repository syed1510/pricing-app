using Microsoft.AspNetCore.Mvc;

namespace PricingApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlansController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetPlans()
        {
            var plans = new[]
            {
                new { Name = "Basic", Price = "$10/mo", Features = new[] { "Feature A", "Feature B" } },
                new { Name = "Pro", Price = "$20/mo", Features = new[] { "Feature A", "Feature B", "Feature C" } },
                new { Name = "Enterprise", Price = "$50/mo", Features = new[] { "All features", "Priority support" } }
            };

            return Ok(plans);
        }

        [HttpPost("subscribe")]
        public IActionResult Subscribe([FromBody] string planName)
        {
            return Ok(new
            {
                status = "success",
                plan = planName,
                transactionId = Guid.NewGuid()
            });
        }
    }
}