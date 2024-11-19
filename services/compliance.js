import cron from 'node-cron';
const {nodemailer, createTransport} = pkg
import pkg from 'nodemailer';
import { UserModel } from '../models/user-models.js';



// funnction to send compliance reminders
  // loop through the database and get the emails of all users who havent met compliance requirements


export const sendComplianceReminders = async () => {
  // Fetch users who haven't met compliance requirements
  const nonCompliantUsers =await UserModel.find({
    complianceStatus: 'non-compliant'

    
  })
  // get emails from retrieved users
  const emails = nonCompliantUsers.map(user => user.email);
   // create transporter using nodemailer
   const transporter = nodemailer.createTransport({
    service :'gmail',
    auth:{
      user: 'j90381026@gmail.com',
      pass: 'offei1234'
    }
   });
  //  loop through the emails and send reminders
  for(const email of emails) {
    const mailOptions = {
      from: 'j90381026@gmail.com',
      to:email,
      subject:'Compliance Reminder',
      text: 'Please meet the compliance requirements'
    };
    
  try {
      console.log(`Sending eminder to ${email}`);
      await transporter.sendMail(mailOptions);
      console.log(`Reminder sent to ${email}`);
  } catch (error) {
    console.error(`Error sending reminder to ${email}`)
  }
  }


 
}
// send the email


export const scheduleNotifications = () => {
    // Schedule a daily job to send compliance reminders at 9:00 AM every day
    cron.schedule('40 7 * * *', async () => {
      try {
        console.log("Running compliance reminders scheduler");
        await sendComplianceReminders();
        console.log("Compliance reminders sent");
      } catch (error) {
        console.error('Error scheduling compliance reminders:', error);
      }
    })}