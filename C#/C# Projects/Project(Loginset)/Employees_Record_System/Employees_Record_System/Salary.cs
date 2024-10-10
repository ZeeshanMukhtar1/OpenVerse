using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;

namespace Employees_Record_System
{
    public partial class Salary : Form
    {
        public Salary()
        {
            InitializeComponent();
        }
        SqlConnection conn = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\syedm\OneDrive\Documents\Employees_Database.mdf;Integrated Security=True;Connect Timeout=30");

        private void Salary_Load(object sender, EventArgs e)
        {


        }

        private void label11_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void richTextBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void bunifuThinButton24_Click(object sender, EventArgs e)
        {
            Home homeobj = new Home();
            homeobj.Show();
            this.Hide();
        }
        private void fetchempdata()
        {
            if(EmpIdTb.Text == "")
            {
                MessageBox.Show("Enter Employee Id");
            }
            else
            {
                conn.Open();
                string query = "select * from EmployeeTbl where EmpId='" + EmpIdTb.Text + "'";
                SqlCommand cmd = new SqlCommand(query, conn);
                DataTable dt = new DataTable();
                SqlDataAdapter sda = new SqlDataAdapter(cmd);
                sda.Fill(dt);

                if (dt.Rows.Count == 0)
                {
                    MessageBox.Show("Incorrect Employee ID. Please enter a valid Employee ID.");

                }
                else
                {
                    foreach (DataRow dr in dt.Rows)
                    {

                        EmpNameTb.Text = dr["Empname"].ToString();
                        EmpPositionTb.Text = dr["Empposition"].ToString();


                    }
                }
                conn.Close();
            }
           
        }
        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

         private void bunifuThinButton23_Click(object sender, EventArgs e)
       {
            fetchempdata();

        }

       int Dailybase;
        int total;
        private void bunifuThinButton22_Click(object sender, EventArgs e)
        {
            if(EmpPositionTb.Text == "")
            {
                MessageBox.Show("Select  An Employee Role ");
            }
            else if(EmpworkeddaysTbl.Text == "" || Convert.ToInt32(EmpworkeddaysTbl.Text) > 28)
            {
                MessageBox.Show("Enter the Valid Number of Working Days!");

            }
            else
            {

                if (EmpPositionTb.Text == "GENERAL MANAGER")
                {
                    Dailybase = 10000;
                }
                else if (EmpPositionTb.Text == "SENIOR DEVELOPER")
                {
                    Dailybase = 8000;
                }
                else if (EmpPositionTb.Text == "JUNIOR DEVELOPER")
                {
                    Dailybase = 4000;
                }
                else if (EmpPositionTb.Text == "MERN STACK DEVELOPER")
                {
                    Dailybase = 12000;
                }
                else if (EmpPositionTb.Text == "PHP DEVELOPER")
                {
                    Dailybase = 11000;
                }
                else if (EmpPositionTb.Text == "FRONT END DEVELOPER")
                {
                    Dailybase = 8000;
                }
                else if (EmpPositionTb.Text == "FULL STACK DEVELOPER")
                {
                    Dailybase = 20000;
                }
                else if (EmpPositionTb.Text == "WEB DESIGNER")
                {
                    Dailybase = 4000;
                }
                else if (EmpPositionTb.Text == "QUALITY ASSURANCE")
                {
                    Dailybase = 3500;
                }
                else if (EmpPositionTb.Text == "ACCOUNTANT")
                {
                    Dailybase = 5000;
                }
                else if (EmpPositionTb.Text == "RECEPTIONIST")
                {
                    Dailybase = 3000;
                }
                else if (EmpPositionTb.Text == "CO FOUNDER")
                {
                    Dailybase = 25000;
                }
                else if (EmpPositionTb.Text == "BUSINESS DEVELOPER")
                {
                    Dailybase = 9000;
                }
                else if (EmpPositionTb.Text == ".NET CORE DEVELOPER")
                {
                    Dailybase = 13000;
                }
                else if (EmpPositionTb.Text == "BACKEND DEVELOPER")
                {
                    Dailybase = 18000;
                }
                else if (EmpPositionTb.Text == "DATABASE ADMINISTRATOR")
                {
                    Dailybase = 14000;
                }
                else if (EmpPositionTb.Text == "HR MANAGER")
                {
                    Dailybase = 5000;
                }
                else if (EmpPositionTb.Text == "GRAPHIC DESIGNER")
                {
                    Dailybase = 5000;
                }
                else if (EmpPositionTb.Text == "GAME DEVELOPER(UNITY)")
                {
                    Dailybase = 25000;
                }
                else if (EmpPositionTb.Text == "FREELANCER")
                {
                    Dailybase = 14000;
                }
                else if (EmpPositionTb.Text == "YOUTUBER")
                {
                    Dailybase = 8000;
                }
                else if (EmpPositionTb.Text == "BLOGER")
                {
                    Dailybase = 8000;
                }
                else if (EmpPositionTb.Text == "SEO EXPERT")
                {
                    Dailybase = 8000;
                }
                else if (EmpPositionTb.Text == "CYBERSECURITY EXPERT")
                {
                    Dailybase = 19000;
                }
                else if (EmpPositionTb.Text == "PYTHON DJANGO DEVELOPER")
                {
                    Dailybase = 18000;
                }
                else if (EmpPositionTb.Text == "WORDPRESS DEVELOPER")
                {
                    Dailybase = 10000;
                }
                else if (EmpPositionTb.Text == "REACT DEVELOPER")
                {
                    Dailybase = 12000;
                }
                else if (EmpPositionTb.Text == "SOCIAL MEDIA EXPERT")
                {
                    Dailybase = 7000;
                }
                else if (EmpPositionTb.Text == "ANDROID DEVELOPER")
                {
                    Dailybase = 20000;
                }
                else if (EmpPositionTb.Text == "DATA SCIENTIST")
                {
                    Dailybase = 19000;
                }
                else if (EmpPositionTb.Text == "CORE PROGRAMMER")
                {
                    Dailybase = 15000;
                }
                else
                {
                   
                    MessageBox.Show("Position not found or salary not set.");
                }
                total = Dailybase * Convert.ToInt32(EmpworkeddaysTbl.Text);
                SalarySlip.Text = "Employee Id   = " + EmpIdTb.Text + "\n"+"Employee Name   = " +EmpNameTb.Text + "\n" +"Employee Role = "+EmpPositionTb.Text + "\n" + "Employee Worked Days   = "+EmpworkeddaysTbl.Text + "\n" +"Daily Salary RS   = "+Dailybase+"\n"+"Total Amount RS   = "+total ;

              //  MessageBox.Show($"The daily base salary for {position} is: {Dailybase.ToString()}");
            }
        }

        private void EmpIdTb_TextChanged(object sender, EventArgs e)
        {

        }

        private void guna2TextBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void bunifuThinButton21_Click(object sender, EventArgs e)
        {
            if (printPreviewDialog1.ShowDialog() == DialogResult.OK)
            {
                printDocument1.Print();
            }
        }

        private void printDocument1_PrintPage(object sender, System.Drawing.Printing.PrintPageEventArgs e)
        {
            e.Graphics.DrawString("💫💫👤 SALARY DOCUMENT 👤💫💫", new Font("Century Gothic", 24, FontStyle.Bold), Brushes.DarkRed, new Point(200));
            e.Graphics.DrawString("Employee ID = " + EmpIdTb.Text , new Font("Century Gothic", 15, FontStyle.Bold), Brushes.Blue, new Point(7, 90));
            e.Graphics.DrawString("Employee Name = " + EmpNameTb.Text , new Font("Century Gothic", 15, FontStyle.Bold), Brushes.Blue, new Point(7, 140));
            e.Graphics.DrawString("Employee Position = " + EmpPositionTb.Text, new Font("Century Gothic", 15, FontStyle.Bold), Brushes.Blue, new Point(7, 190));
            e.Graphics.DrawString("Worked Days = " + EmpworkeddaysTbl.Text, new Font("Century Gothic", 15, FontStyle.Bold), Brushes.Blue, new Point(7, 240));
            e.Graphics.DrawString("Daily Base = " + Dailybase, new Font("Century Gothic", 15, FontStyle.Bold), Brushes.Blue, new Point(7, 290));
            e.Graphics.DrawString("Total Salary = " + total, new Font("Century Gothic", 15, FontStyle.Bold), Brushes.Blue, new Point(7, 340));

            e.Graphics.DrawString("💫💫👤👤👤 EmpiSoft 👤👤💫💫", new Font("Century Gothic", 24, FontStyle.Bold), Brushes.DarkRed, new Point(200, 390));

        }
    }
}
