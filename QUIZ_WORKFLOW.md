# Quiz System - Complete Workflow

## Overview
This system allows students to sign up, take a quiz, and have their results automatically recorded in an admin panel for teachers to review.

---

## STUDENT WORKFLOW

### Step 1: Access Quiz Mode
- From the main menu page, click the **"Quiz"** button or navigate to `quiz.html`
- The student sign-up overlay will automatically appear

### Step 2: Fill Sign-Up Form
The sign-up form collects the following information:

| Field | Required | Description |
|-------|----------|-------------|
| First Name | Yes | Student's given name |
| Last Name | Yes | Student's surname |
| Middle Name | No | Student's middle name (optional) |
| Course | Yes | Course code/name (e.g., "BS Information Technology", "BS Engineering") |
| Section | Yes | Class section (e.g., "A1", "B2", "1st Year - Section 1") |

### Step 3: Start Quiz
- Click **"Start Quiz"** button
- If any required field is missing, an error message appears: "Please fill in all required fields"
- Once validated, the sign-up overlay closes and the quiz begins

### Step 4: Take the Quiz
- The quiz displays 20 questions about Fluid Mechanics
- Each question has 4 multiple-choice options
- Click any option to select an answer and proceed to the next question
- Progress indicator shows "Question X / 20"

### Step 5: Auto-Save Results
After completing the last question:
- The quiz shows "Quiz Finished" and displays the **Final Score** (e.g., "15 / 20")
- Results are **automatically saved** to the admin panel
- A **PDF report** is generated with:
  - Student name, course, and section
  - Total questions, correct/incorrect answers
  - Final percentage score
  - Date and time submitted
- The PDF is automatically downloaded to the student's device

---

## ADMIN PANEL WORKFLOW

### Step 1: Access Admin Login
- From the main menu, click **"Admin Login"** or navigate to `login.html`
- A login form appears asking for password

### Step 2: Login
- Default password: **`admin123`**
- Click **"Login"** button
- Upon successful login, the **Professor Dashboard** appears

### Step 3: View Student Records
The admin panel displays a table with all student quiz submissions:

| Column | Purpose |
|--------|---------|
| Full Name | Student's full name (Last, First, Middle format) |
| Course | Student's course |
| Section | Student's section |
| Correct | Number of correct answers |
| Wrong | Number of incorrect answers |
| Grade | Percentage score (%) |
| Review | View student's individual answers |
| Delete | Remove record (with confirmation) |
| Date Submitted | When the quiz was completed |

### Step 4: Review Student Answers
- Click **"View Answers"** button in any row
- A modal opens showing:
  - Each question the student answered
  - Student's selected answer (green if correct, red if incorrect)
  - Correct answer (for incorrect responses)
- Click **"Close Review"** to dismiss

### Step 5: Delete Records
- Click the **🗑️** trash icon to delete a record
- Confirmation dialog appears: "Are you sure you want to delete this record? This cannot be undone."
- Once deleted, the record is permanently removed

### Step 6: Export Data
- Click **"Download Excel (.csv)"** button
- A CSV file is generated containing:
  - Full Name
  - Course
  - Section
  - Score
  - Percentage
  - Date Submitted
- File is named: `Student_Scores_[DATE].csv`

---

## DATA STORAGE

All student records are stored in the browser's **localStorage** under the key: `quiz_records`

Each record contains:
```json
{
  "fullName": "Doe, John Michael",
  "course": "BS Information Technology",
  "section": "A1",
  "score": "15/20",
  "correctCount": 15,
  "wrongCount": 5,
  "percentage": "75.00%",
  "timestamp": "6/25/2026, 10:30:45 AM",
  "details": [ ... ] // Individual question answers
}
```

---

## KEY FEATURES

✅ **Automated Recording**: Quiz results are automatically saved when students complete the quiz

✅ **Complete Student Information**: Tracks surname, given name, middle name, course, and section

✅ **Admin Access**: Secure login to view all student records

✅ **Answer Review**: Teachers can review each student's answers question-by-question

✅ **PDF Reports**: Automatic PDF generation for each student submission

✅ **Data Export**: CSV export for use in spreadsheets or data analysis

✅ **Record Management**: Delete records as needed

---

## NOTES

- The system uses browser localStorage, so records persist until deleted
- Admin password is set to "admin123" (can be changed in login.html)
- Each question has one correct answer
- Percentage is calculated as: (Correct Answers / Total Questions) × 100
- Date/time is captured in the local timezone of the student's device
