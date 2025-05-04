import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const CustomizedCoverLetter = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');

  useEffect(() => {
    if (session) {
      // Fetch user data based on email
      fetch(`/api/getUser/${session.user.email}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);

          // Generate cover letter when user data is fetched
          const generatedCoverLetter = generateCoverLetter(data);
          setCoverLetter(generatedCoverLetter);
        })
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, [session]);

  const generateCoverLetter = (userData) => {
    const name = userData?.name ?? "Your Name";
  
    // Handle education (first item)
    const educationItem = Array.isArray(userData.education) ? userData.education[0] : null;
    const educationText = educationItem
      ? `${educationItem.degreeTitle ?? "your degree"} from ${educationItem.institute ?? "your institute"}`
      : "your educational background";
  
    // Handle experience (first item)
    const experienceItem = Array.isArray(userData.experience) ? userData.experience[0] : null;
    const experienceText = experienceItem
      ? `${experienceItem.title ?? "your role"} for ${experienceItem.duration ?? "some time"}`
      : "relevant experience";
  
    // Handle skills
    const skills = Array.isArray(userData.skills) ? userData.skills.join(", ") : "relevant skills";
  
    // Handle contact and email
    const email = userData?.email ?? "your.email@example.com";
    const phone = typeof userData?.contact === "string" ? userData.contact : "your phone number";
  
    return `
  Dear Hiring Manager,
  
  I am writing to express my interest in the position of [Job Title] at [Company Name]. With a degree in ${educationText}, and significant experience as ${experienceText}, I believe I possess the skills and qualifications necessary to excel in this role.
  
  As a professional with a strong background in ${skills}, I have developed a deep understanding of the demands of this field. I am confident that my technical expertise, coupled with my passion for the industry, will allow me to make a meaningful contribution to your team.
  
  My contact details are as follows:
  Email: ${email}
  Phone: ${phone}
  
  I am looking forward to discussing how my skills and experiences can benefit [Company Name]. Thank you for considering my application.
  
  Sincerely,  
  ${name}
  `;
  };
  
  
  
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Cover Letter </h2>
      {user ? (
        <div style={styles.letterBox}>
          
          <div style={styles.coverLetterContainer}>
            {coverLetter}
          </div>
        </div>
      ) : (
        <p>Loading your profile...</p>
      )}
    </div>
  );
};

// Styling
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    flexDirection: 'column',
    overflow: 'hidden', // Prevent scrolling on the page
  },
  heading: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
    fontWeight: 'bold',
  },
  letterBox: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    maxWidth: '800px',
    width: '100%',
    color: '#222',
    textAlign: 'left',
    overflow: 'hidden', // Prevent scroll bar in letterBox
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverLetterContainer: {
    whiteSpace: 'pre-line', // Keeps line breaks
    fontSize: '16px',
    lineHeight: '1.6',
    textAlign: 'left',
    maxWidth: '100%',
    wordWrap: 'break-word',
    marginTop: '1rem',
  },
};

export default CustomizedCoverLetter;
