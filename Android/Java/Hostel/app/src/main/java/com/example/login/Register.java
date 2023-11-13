package com.example.login;

import androidx.appcompat.app.AppCompatActivity;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;

import android.os.Bundle;
import android.widget.TextView;

public class Register extends AppCompatActivity {

    EditText mName ,mEmail,mPassword,mPhone;
    Button mregister;
    TextView mLoginBtn;
    ProgressBar mProgressBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

      mName = findViewById(R.id.name);
        mEmail = findViewById(R.id.email);
                mPassword = findViewById(R.id.password);
        mPhone = findViewById(R.id.phone);


        mregister = findViewById(R.id.registerbtn);
        mLoginBtn = findViewById(R.id.createtext);
        mProgressBar = findViewById(R.id.progressbar);

        mLoginBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(), Login.class));
            }
        });


mregister.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View view) {
        final String email=mEmail.getText().toString().trim();
         String password=mPassword.getText().toString().trim();
        final String name=mName.getText().toString();
        final String phone=mPhone.getText().toString().trim();
     if (TextUtils.isEmpty(email))
     {
         mEmail.setError("Email is required");
         return;
     }
       if (TextUtils.isEmpty(password))
       {
           mPassword.setError("Password is required");
           return;
       }
       if (password.length()< 6){
           mPassword.setError("Password must be more then 6 character");
           return;
       }
    }
});


    }
}