namespace Employees_Record_System
{
    partial class Splash
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Splash));
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.guna2CirclePictureBox1 = new Guna.UI2.WinForms.Guna2CirclePictureBox();
            this.circularpbar = new CircularProgressBar.CircularProgressBar();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.circlepbar2 = new Guna.UI2.WinForms.Guna2CircleProgressBar();
            this.timer2 = new System.Windows.Forms.Timer(this.components);
            ((System.ComponentModel.ISupportInitialize)(this.guna2CirclePictureBox1)).BeginInit();
            this.circlepbar2.SuspendLayout();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Montserrat", 15.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.Color.Teal;
            this.label1.Location = new System.Drawing.Point(73, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(363, 29);
            this.label1.TabIndex = 0;
            this.label1.Text = "Employee Management System";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Montserrat", 9.749999F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.ForeColor = System.Drawing.Color.Teal;
            this.label2.Location = new System.Drawing.Point(143, 257);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(217, 18);
            this.label2.TabIndex = 1;
            this.label2.Text = "Developed By SyedMaazSaeed";
            // 
            // guna2CirclePictureBox1
            // 
            this.guna2CirclePictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("guna2CirclePictureBox1.Image")));
            this.guna2CirclePictureBox1.ImageRotate = 0F;
            this.guna2CirclePictureBox1.Location = new System.Drawing.Point(31, 40);
            this.guna2CirclePictureBox1.Name = "guna2CirclePictureBox1";
            this.guna2CirclePictureBox1.ShadowDecoration.Mode = Guna.UI2.WinForms.Enums.ShadowMode.Circle;
            this.guna2CirclePictureBox1.Size = new System.Drawing.Size(107, 91);
            this.guna2CirclePictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.guna2CirclePictureBox1.TabIndex = 0;
            this.guna2CirclePictureBox1.TabStop = false;
            // 
            // circularpbar
            // 
            this.circularpbar.AnimationFunction = WinFormAnimation.KnownAnimationFunctions.Liner;
            this.circularpbar.AnimationSpeed = 500;
            this.circularpbar.BackColor = System.Drawing.Color.Transparent;
            this.circularpbar.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.circularpbar.ForeColor = System.Drawing.Color.White;
            this.circularpbar.InnerColor = System.Drawing.Color.FromArgb(((int)(((byte)(37)))), ((int)(((byte)(42)))), ((int)(((byte)(64)))));
            this.circularpbar.InnerMargin = 2;
            this.circularpbar.InnerWidth = -1;
            this.circularpbar.Location = new System.Drawing.Point(0, 53);
            this.circularpbar.MarqueeAnimationSpeed = 2000;
            this.circularpbar.Name = "circularpbar";
            this.circularpbar.OuterColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(30)))), ((int)(((byte)(54)))));
            this.circularpbar.OuterMargin = -25;
            this.circularpbar.OuterWidth = 26;
            this.circularpbar.ProgressColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(126)))), ((int)(((byte)(249)))));
            this.circularpbar.ProgressWidth = 10;
            this.circularpbar.SecondaryFont = new System.Drawing.Font("Microsoft Sans Serif", 2.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.circularpbar.Size = new System.Drawing.Size(200, 200);
            this.circularpbar.StartAngle = 270;
            this.circularpbar.Style = System.Windows.Forms.ProgressBarStyle.Continuous;
            this.circularpbar.SubscriptColor = System.Drawing.Color.FromArgb(((int)(((byte)(166)))), ((int)(((byte)(166)))), ((int)(((byte)(166)))));
            this.circularpbar.SubscriptMargin = new System.Windows.Forms.Padding(10, -35, 0, 0);
            this.circularpbar.SubscriptText = "";
            this.circularpbar.SuperscriptColor = System.Drawing.Color.FromArgb(((int)(((byte)(166)))), ((int)(((byte)(166)))), ((int)(((byte)(166)))));
            this.circularpbar.SuperscriptMargin = new System.Windows.Forms.Padding(10, 35, 0, 0);
            this.circularpbar.SuperscriptText = "";
            this.circularpbar.TabIndex = 3;
            this.circularpbar.TextMargin = new System.Windows.Forms.Padding(8, 8, 0, 0);
            this.circularpbar.Value = 68;
            this.circularpbar.Click += new System.EventHandler(this.circularpbar_Click);
            // 
            // timer1
            // 
            this.timer1.Enabled = true;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // circlepbar2
            // 
            this.circlepbar2.BackColor = System.Drawing.Color.Transparent;
            this.circlepbar2.Controls.Add(this.guna2CirclePictureBox1);
            this.circlepbar2.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(200)))), ((int)(((byte)(213)))), ((int)(((byte)(218)))), ((int)(((byte)(223)))));
            this.circlepbar2.FillThickness = 12;
            this.circlepbar2.Font = new System.Drawing.Font("Segoe UI", 12F);
            this.circlepbar2.ForeColor = System.Drawing.Color.White;
            this.circlepbar2.Location = new System.Drawing.Point(208, 62);
            this.circlepbar2.Minimum = 0;
            this.circlepbar2.Name = "circlepbar2";
            this.circlepbar2.ProgressColor = System.Drawing.Color.Teal;
            this.circlepbar2.ProgressColor2 = System.Drawing.Color.Teal;
            this.circlepbar2.ProgressThickness = 12;
            this.circlepbar2.ShadowDecoration.Mode = Guna.UI2.WinForms.Enums.ShadowMode.Circle;
            this.circlepbar2.Size = new System.Drawing.Size(170, 170);
            this.circlepbar2.TabIndex = 4;
            this.circlepbar2.ValueChanged += new System.EventHandler(this.circlepbar2_ValueChanged);
            // 
            // timer2
            // 
            this.timer2.Enabled = true;
            this.timer2.Tick += new System.EventHandler(this.timer2_Tick);
            // 
            // Splash
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(523, 281);
            this.Controls.Add(this.circlepbar2);
            this.Controls.Add(this.circularpbar);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Splash";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Splash_Load);
            ((System.ComponentModel.ISupportInitialize)(this.guna2CirclePictureBox1)).EndInit();
            this.circlepbar2.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private Guna.UI2.WinForms.Guna2CirclePictureBox guna2CirclePictureBox1;
        private CircularProgressBar.CircularProgressBar circularpbar;
        private System.Windows.Forms.Timer timer1;
        private Guna.UI2.WinForms.Guna2CircleProgressBar circlepbar2;
        private System.Windows.Forms.Timer timer2;
    }
}


