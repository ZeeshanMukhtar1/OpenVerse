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
    public partial class ViewEmployee : Form
    {
        public ViewEmployee()
        {
            InitializeComponent();
        }

        SqlConnection conn = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\syedm\OneDrive\Documents\Employees_Database.mdf;Integrated Security=True;Connect Timeout=30");
        private void fetchempdata()
        {
            conn.Open();
            string query = "select * from EmployeeTbl where EmpId='"+EmpidTbsearch.Text+"'";
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
                    Empidlbl.Text = dr["Empid"].ToString();
                    Empnamelbl.Text = dr["Empname"].ToString();
                    Empaddresslbl.Text = dr["Empaddress"].ToString();
                    Empgenderlbl.Text = dr["Empgender"].ToString();
                    Emppositionlbl.Text = dr["Empposition"].ToString();
                    Empdoblbl.Text = dr["Empdob"].ToString();
                    Empphonelbl.Text = dr["Empphone"].ToString();
                    Empeducationlbl.Text = dr["Empeducation"].ToString();

                    Empidlbl.Visible = true;
                    Empnamelbl.Visible = true;
                    Empaddresslbl.Visible = true;
                    Empgenderlbl.Visible = true;
                    Emppositionlbl.Visible = true;
                    Empdoblbl.Visible = true;
                    Empphonelbl.Visible = true;
                    Empeducationlbl.Visible = true;

                }
            }
                conn.Close();
            
        }
        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void ViewEmployee_Load(object sender, EventArgs e)
        {

        }

        private void EmpDGV_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void label10_Click(object sender, EventArgs e)
        {
        }

        private void label10_Click_1(object sender, EventArgs e)
        {

        }

        private void guna2TextBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void EmpIdTb_TextChanged(object sender, EventArgs e)
        {

        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void label9_Click(object sender, EventArgs e)
        {

        }

        private void label6_Click(object sender, EventArgs e)
        {

        }

        private void label19_Click(object sender, EventArgs e)
        {

        }

        private void label17_Click(object sender, EventArgs e)
        {

        }

        private void label18_Click(object sender, EventArgs e)
        {

        }

        private void label16_Click(object sender, EventArgs e)
        {

        }

        private void bunifuThinButton24_Click(object sender, EventArgs e)
        {
            Home homeobj=new Home();
            homeobj.Show();
            this.Hide();
        }

        private void bunifuThinButton21_Click(object sender, EventArgs e)
        {
            if(printPreviewDialog1.ShowDialog() == DialogResult.OK)
            {
                printDocument1.Print();
            }
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void bunifuThinButton25_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(EmpidTbsearch.Text))
            {
                MessageBox.Show("Please enter an Employee ID first.");
                return; 
            }
            fetchempdata();
        }

        private void label11_Click(object sender, EventArgs e)
        {
            Application.Exit(); 
        }

        private void printPreviewDialog1_Load(object sender, EventArgs e)
        {

        }

        private void printDocument1_PrintPage(object sender, System.Drawing.Printing.PrintPageEventArgs e)
        {
            e.Graphics.DrawString("💫💫👤 EMPLOYEE SUMMARY 👤💫💫", new Font("Century Gothic",24,FontStyle.Bold),Brushes.DarkRed,new Point(200));
            e.Graphics.DrawString("Employee ID = "+Empidlbl.Text+"\tEmployee Name"+Empnamelbl.Text, new Font("Century Gothic", 15, FontStyle.Bold), Brushes.Blue, new Point(7,90));
            e.Graphics.DrawString("Employee Address = " + Empaddresslbl.Text + "\tEmployee Gender= " + Empgenderlbl.Text, new Font("Century Gothic", 15, FontStyle.Bold), Brushes.Blue, new Point(7, 140));
            e.Graphics.DrawString("Employee Position = "+Emppositionlbl.Text+"\tEmployee DOB=" + Empdoblbl.Text, new Font("Century Gothic", 15, FontStyle.Bold), Brushes.Blue, new Point(7, 190));
            e.Graphics.DrawString("Employee Phone = " + Empphonelbl.Text + "\t\tEmployee Education= " + Empeducationlbl.Text, new Font("Century Gothic", 15, FontStyle.Bold), Brushes.Blue, new Point(7, 240));

            e.Graphics.DrawString("💫💫👤👤👤 EmpiSoft 👤👤💫💫", new Font("Century Gothic", 24, FontStyle.Bold), Brushes.DarkRed, new Point(200,320));


        }
    }
}
