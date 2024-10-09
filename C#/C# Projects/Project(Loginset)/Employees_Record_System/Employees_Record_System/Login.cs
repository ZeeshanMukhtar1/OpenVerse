using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Employees_Record_System
{
    public partial class Login : Form
    {
        public Login()
        {
            InitializeComponent();
        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            if(UidTb.Text == "" || PasswordTb.Text == "")
            {
                MessageBox.Show("Enter User Name or  User Password");
            }
            else if(UidTb.Text =="Developer" && PasswordTb.Text == "Developer") 
            {
                this.Hide();
                Home homeobj = new Home();
                homeobj.Show();
            }
            else
            {
                MessageBox.Show("WRONG User Name Or Password");
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(UidTb.Text) && string.IsNullOrEmpty(PasswordTb.Text))
            {
                MessageBox.Show("Fields are already empty!");
            }
            else
            {
                UidTb.Text = "";
                PasswordTb.Text = "";
            }
        }

        private void UidTb_TextChanged(object sender, EventArgs e)
        {

        }

        private void PasswordTb_TextChanged(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void Login_Load(object sender, EventArgs e)
        {

        }
    }
}
