using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2_Backend.Migrations
{
    public partial class login : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Birthday = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserT = table.Column<int>(type: "int", nullable: false),
                    isActive = table.Column<bool>(type: "bit", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Address", "Birthday", "Email", "Image", "IsDeleted", "LastName", "Name", "Password", "UserT", "Username", "isActive" },
                values: new object[,]
                {
                    { 1, "Novi Sad", new DateTime(1997, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), "godlike.jovan@gmail.com", "", false, "Miljkovic", "Jovan", "jovan123", 3, "AdminJovan", true },
                    { 2, "Novi Sad", new DateTime(1997, 1, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), "srdjandzinovic97@gmail.com", "", false, "Dzinovic", "Srdjan", "dzin123", 1, "DispatcherDzin", true },
                    { 3, "Novi Sad", new DateTime(1997, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), "joci.miljkovic@gmail.com", "", false, "Miljkovic", "Jovan", "jovan123", 2, "WorkerJovan", true },
                    { 4, "Novi Sad", new DateTime(1994, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "dejanbozic@gmail.com", "", false, "Bozic", "Dejan", "dejan123", 0, "CrewDejan", true }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
