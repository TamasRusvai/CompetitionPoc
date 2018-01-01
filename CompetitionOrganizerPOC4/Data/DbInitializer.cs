using CompetitionOrganizerPOC4.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CompetitionOrganizerPOC4.Data
{
    public static class DbInitializer
    {
        public static void Initialize(CompetitionContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Players.Any())
            {
                return;   // DB has been seeded
            }

            var players = new Player[]
            {
            new Player{ Name = "Rusvai Tamás"},
            new Player{Name = "Cselleng Angéla"},
            new Player{ Name = "Rusvai Péter"},
            new Player{ Name = "Halmi József"},
            new Player{ Name = "Csécs Noémi"}
            };

            foreach (Player s in players)
            {
                context.Players.Add(s);
            }

            context.SaveChanges();
        }
    }
}
