using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using WEB2_Backend.Database.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using WEB2_Backend.Model;
using Microsoft.AspNetCore.Identity;
using WEB2_Backend.Service.Login;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using WEB2_Backend.Database.Interface;
using Microsoft.AspNetCore.Http.Features;

namespace WEB2_Backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AppDbContext>(options =>
               options.UseSqlServer(Configuration.GetConnectionString("AppServiceConnection")));

            //services.AddDefaultIdentity<AuthentificationUser>().AddRoles<AuthorizationRole>()
            //   .AddEntityFrameworkStores<AppDbContext>();

            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddCors(o =>
            {
                o.AddPolicy("Angular", corsPolicyBuilder =>
                {
                    corsPolicyBuilder.AllowAnyOrigin()
                     .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });

            var key = Encoding.UTF8.GetBytes(Configuration["ApplicationSettings:JWT_Secret"].ToString());

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = false;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            });
            services.Configure<FormOptions>(o =>
            {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });
            services.AddMvc();

            services.AddControllers().AddNewtonsoftJson(options =>
options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
);


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider provider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(builder =>
            builder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod()
            );

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            //CreateRoles(provider);
        }

        public void CreateRoles(IServiceProvider serviceProvider)
        {
            var roleManager = serviceProvider.GetRequiredService<RoleManager<AuthorizationRole>>();
            var userManager = serviceProvider.GetRequiredService<UserManager<AuthentificationUser>>();
            Task<IdentityResult> roleResult;
            string email = "admin@admin.com";
            string[] roles = { "Ath_worker", "Crew_member", "Dispatcher", "Admin" };
            //Check that there is an Administrator role and create if not

            foreach (var a in roles)
            {
                Task<bool> hasAdminRole = roleManager.RoleExistsAsync(a);
                hasAdminRole.Wait();

                if (!hasAdminRole.Result)
                {
                    roleResult = roleManager.CreateAsync(new AuthorizationRole(a));
                    roleResult.Wait();
                }
            }


            //Check if the admin user exists and create it if not
            //Add to the Administrator role

            Task<AuthentificationUser> testUser = userManager.FindByEmailAsync(email);
            testUser.Wait();

            if (testUser.Result == null)
            {
                var admin = new AuthentificationUser();
                admin.IsPasswordOk = true;
                admin.Email = email;
                admin.UserName = "Admin";

                Task<IdentityResult> newUser = userManager.CreateAsync(admin, "Admin123");
                newUser.Wait();

                if (newUser.Result.Succeeded)
                {
                    Task<IdentityResult> newUserRole = userManager.AddToRoleAsync(admin, "Admin");
                    newUserRole.Wait();
                }
            }
        }

    }
}
