package com.example.demo;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class CreateAccountActivity extends AppCompatActivity {

    EditText emailEditText,passwordEditText,confirPasswordEditText;
    Button  createAccountBtn;
    ProgressBar progressBar;
    TextView loginBtnTextView;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_account);

        emailEditText =findViewById(R.id.email_edit_text);
        passwordEditText =findViewById(R.id.password_edit_text);
        confirPasswordEditText =findViewById(R.id.confirm_password_edit_text);
        progressBar =findViewById(R.id.progress_bar);
        loginBtnTextView =findViewById(R.id.login_text_view_btn);

        createAccountBtn.setOnClickListener(v-> createAccount());
        loginBtnTextView.setOnClickListener(v-> finish());


    }

    void createAccount(){
        String email = emailEditText.getText().toString();
        String password  = passwordEditText.getText().toString();
        String confirmPassword = confirPasswordEditText.getText().toString();

        boolean isValidated = validdateData(email,password,confirmPassword);
        if (!isValidated){
            return;
        }

        createAccountInFirebase(email,password);
    }
    void createAccountInFirebase(String email,String password){
      changeInProgress(true);

      FirebaseAuth firebaseAuth = FirebaseAuth.getInstance();
      firebaseAuth.createUserWithEmailAndPassword(email,password).addOnCompleteListener(CreateAccountActivity.this,
              new OnCompleteListener<AuthResult>() {
                  @Override
                  public void onComplete(@NonNull Task<AuthResult> task) {
                      if (task.isSuccessful()){
                          //Creating Account is Done
                          Toast.makeText(CreateAccountActivity.this,"Succesfully create Account,check email to varify",Toast.LENGTH_SHORT).show();
                          firebaseAuth.getCurrentUser().sendEmailVerification();
                          firebaseAuth.signOut();
                          finish();
                      }else {
                          //failure
                          Toast.makeText(CreateAccountActivity.this,task.getException().getLocalizedMessage(),Toast.LENGTH_SHORT).show();


                      }
                  }
              }
              );
    }
    void changeInProgress(boolean inProgress){
        if(inProgress){
            progressBar.setVisibility(View.VISIBLE);
            createAccountBtn.setVisibility(View.GONE);
        }else {
            progressBar.setVisibility(View.GONE);
            createAccountBtn.setVisibility(View.VISIBLE);
        }

    }


    boolean validdateData(String email, String password, String confirmPassword){
        //validate the data that are input by user.

        if(!Patterns.EMAIL_ADDRESS.matcher(email).matches()){
            emailEditText.setError("Emial is invalid");
            return false;
        }
        if (password.length()<6) {
            passwordEditText.setError("Password length is invalid");
            return false;
        }
        if (password.equals(confirmPassword)){
            confirPasswordEditText.setError("Password not matched");
            return false;
        }
        return true;
    }

}