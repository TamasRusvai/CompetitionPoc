using CompetitionOrganizerPOC4.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CompetitionOrganizerPOC4.Data
{
    public class CompetitionContext : DbContext
    {
        public CompetitionContext(DbContextOptions<CompetitionContext> options) : base(options)
        {
        }

        public DbSet<Player> Players { get; set; }

    }
}
