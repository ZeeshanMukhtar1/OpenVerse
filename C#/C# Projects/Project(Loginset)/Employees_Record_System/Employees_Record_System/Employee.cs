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
        public partial class Employee : Form
        {
            public Employee()
            {
                InitializeComponent();
            }
            SqlConnection conn = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\syedm\OneDrive\Documents\Employees_Database.mdf;Integrated Security=True;Connect Timeout=30");
            private void guna2TextBox1_TextChanged(object sender, EventArgs e)
            {

            }

            private void panel1_Paint(object sender, PaintEventArgs e)
            {

            }

            private void label2_Click(object sender, EventArgs e)
            {

            }

            private void label3_Click(object sender, EventArgs e)
            {

            }

            private void label6_Click(object sender, EventArgs e)
            {

            }

            private void guna2TextBox3_TextChanged(object sender, EventArgs e)
            {

            }

            private void bunifuThinButton21_Click(object sender, EventArgs e)
            {
              if(EmpIdTb.Text == "" || EmpNameTb.Text == "" || EmpPhoneTb.Text == "" || EmpAddressTb.Text == "")
                {
                    MessageBox.Show("Missing Information");
                }
              else
                {
                    try
                    {
                        conn.Open();
                        string formattedDate = EmpDOBCb.Value.Date.ToString("yyyy-MM-dd");
                        string query = "INSERT INTO EmployeeTbl (EmpId, EmpName, EmpAddress, EmpGender, EmpPosition, EmpDOB, EmpPhone, EmpEducation) VALUES ('" + EmpIdTb.Text + "','" + EmpNameTb.Text + "','" + EmpAddressTb.Text + "','" + EmpGenderCb.SelectedItem.ToString() + "','" + EmpPositionCb.SelectedItem.ToString() + "' , '" + formattedDate + "' ,'" + EmpPhoneTb.Text + "' , '" + EmpEducationCb.SelectedItem.ToString() + "')";
                        SqlCommand cmd = new SqlCommand(query, conn);
                        cmd.ExecuteNonQuery();
                        MessageBox.Show("Employee Record Added Successfully!👤👤");
                        conn.Close();
                        populate();
                    }
                    catch(Exception Ex)
                    {
                        MessageBox.Show(Ex.Message);
                    }
                }
            }

            private void bunifuThinButton23_Click(object sender, EventArgs e)
            {
                if(EmpIdTb.Text == "")
                {
                    MessageBox.Show("Enter the Employee ID!");
                }
                else
                {
                    try 
                    {
                        conn.Open();
                        string query = "delete from EmployeeTbl where EmpId= '" + EmpIdTb.Text + "';";
                        SqlCommand cmd = new SqlCommand(query,conn);
                        cmd.ExecuteNonQuery();
                        MessageBox.Show("Employee Record Removed Successfully!.");
                        conn.Close();
                        populate();
                    }
                    catch(Exception Ex)
                    {
                        MessageBox.Show(Ex.Message);
                    }
                }
            }

            private void bunifuThinButton22_Click(object sender, EventArgs e)
            {
                if (EmpIdTb.Text == "" || EmpNameTb.Text == "" || EmpPhoneTb.Text == "" || EmpAddressTb.Text == "")
                {
                    MessageBox.Show("Missing Information!");
                }
                else
                {
                    try {

                        conn.Open();
                        string query = "update EmployeeTbl set Empname= '" + EmpNameTb.Text + "',empaddress='" +EmpAddressTb + "' ,empposition='" +EmpPositionCb.SelectedItem.ToString() + "' ,empdob='" +EmpDOBCb.Value.Date + "', empphone='" +EmpPhoneTb.Text+ "',empeducation='" +EmpEducationCb.SelectedItem.ToString() + "' ,empgender='" +EmpGenderCb.SelectedItem.ToString()+ "' where Empid='"+EmpIdTb.Text+"';";
                    
                        SqlCommand cmd = new SqlCommand(query, conn);
                        cmd.ExecuteNonQuery();
                        MessageBox.Show("Employee Record/Details Updated Successfully!👤👤");
                        conn.Close();
                        populate();
                    }
                    catch(Exception Ex)
                    {
                        MessageBox.Show(Ex.Message);
                    }
                }
            }

            private void bunifuThinButton24_Click(object sender, EventArgs e)
            {
              Home homeobj = new Home();
            homeobj.Show();
            this.Hide();
            }

            private void guna2DataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
            {
                EmpIdTb.Text = EmpDGV.SelectedRows[0].Cells[0].Value.ToString();
                EmpNameTb.Text =  EmpDGV.SelectedRows[0].Cells[1].Value.ToString();
                EmpAddressTb.Text = EmpDGV.SelectedRows[0].Cells[2].Value.ToString();
                EmpGenderCb.Text = EmpDGV.SelectedRows[0].Cells[3].Value.ToString();
                EmpPositionCb.Text = EmpDGV.SelectedRows[0].Cells[4].Value.ToString();
                EmpPhoneTb.Text = EmpDGV.SelectedRows[0].Cells[6].Value.ToString();
                EmpEducationCb.Text = EmpDGV.SelectedRows[0].Cells[7].Value.ToString();

            }

            private void label1_Click(object sender, EventArgs e)
            {

            }

            private void dateTimePicker1_ValueChanged(object sender, EventArgs e)
            {

            }

            private void EmpGenderTb_SelectedIndexChanged(object sender, EventArgs e)
            {

            }

            private void EmpEducationTb_SelectedIndexChanged(object sender, EventArgs e)
            {

            }

            private void label11_Click(object sender, EventArgs e)
            {
                Application.Exit();
            }
            private void populate()
            {
                conn.Open();
                string query = "select * from EmployeeTbl";
                SqlDataAdapter sda = new SqlDataAdapter(query,conn);
                SqlCommandBuilder builder = new SqlCommandBuilder(sda);
                var ds = new DataSet();
                sda.Fill(ds);
                EmpDGV.DataSource = ds.Tables[0];
                conn.Close();
            }
            private void Employee_Load(object sender, EventArgs e)
            {
                populate();
            }

            private void EmpPositionCb_SelectedIndexChanged(object sender, EventArgs e)
            {

            }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }
    }
    }
