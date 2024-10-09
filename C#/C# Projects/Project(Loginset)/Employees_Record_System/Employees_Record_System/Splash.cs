using System;
using System.Drawing;
using System.Windows.Forms;

namespace Employees_Record_System
{
    public partial class Splash : Form
    {
        public Splash()
        {
            InitializeComponent();
            circlepbar2.Value = 0;
        }
        private void Splash_Load(object sender, EventArgs e)
        {
        }

        //   int startpoint = 0;
        private void timer1_Tick(object sender, EventArgs e)
        {
            //circularpbar.Value += 1;

            //startpoint += 1;
            //Myprogress.Value = startpoint;
            // circularpbar.Text = circularpbar.Value.ToString() + "%";
            //if(circularpbar.Value == 100)
            //{
            //    timer1.Enabled = false;
            //}

            //if (circularpbar.Value == 100)
            //{
            //    circularpbar.Value = 0;
            //    timer1.Stop();
            //   this.Hide();
            //   Login login = new Login();
            //   login.Show();
            //}
        }

        private void circularpbar_Click(object sender, EventArgs e)
        {

        }

        private void circlepbar2_ValueChanged(object sender, EventArgs e)
        {

        }

        private void timer2_Tick(object sender, EventArgs e)
        {
            circlepbar2.Value += 1;

            //startpoint += 1;
            //Myprogress.Value = startpoint;
            // circularpbar.Text = circularpbar.Value.ToString() + "%";
            //if(circularpbar.Value == 100)
            //{
            //    timer1.Enabled = false;
            //}

            if (circlepbar2.Value == 100)
            {
                circlepbar2.Value = 0;
                timer2.Stop();
                this.Hide();
                Login login = new Login();
                login.Show();
            }
        }
    }
}
