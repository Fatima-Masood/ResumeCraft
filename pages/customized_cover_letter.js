import React, { useState, useEffect } from 'react';

// Dummy cover letter (you can later replace this with Gemini output via props or API call)
const sampleCoverLetter = `John R. Whitman
1245 Maple Crescent Road
Denver, CO 80203
johnrwhitman@email.com
(303) 555-2198

May 4, 2025

Hiring Manager
BluePeak Technologies
348 Innovation Drive
Boulder, CO 80301

Dear Hiring Manager,

I am writing to express my interest in the Junior Data Analyst position at BluePeak Technologies, as advertised on your careers page. With a keen analytical mindset, proficiency in data tools, and a genuine enthusiasm for uncovering insights through numbers, I am confident in my ability to contribute meaningfully to your data-driven decision-making.

I recently completed my Bachelor of Science in Statistics from Northern Valley University, where I focused heavily on predictive modeling and data visualization. My senior project involved analyzing regional traffic accident patterns using R and Tableau, resulting in a report that was adopted by a local transportation board. Additionally, during my internship at Glaxis Market Research, I cleaned and analyzed survey data across 12 demographics, helping the marketing team improve customer targeting strategies.

What excites me about BluePeak Technologies is your focus on sustainability analytics and your use of machine learning to optimize energy usage. As someone passionate about environmental data and its real-world applications, I would be thrilled to join a team that aligns technical skills with impactful goals.

Enclosed is my résumé for your review. I look forward to the opportunity to further discuss how my skills and experiences align with the needs of your team. Thank you for considering my application.

Sincerely,
John R. Whitman`;

const CustomizedCoverLetter = () => {
  const [coverLetter, setCoverLetter] = useState('');

  useEffect(() => {
    // Here, you could set the result from Gemini API or props instead of sampleCoverLetter
    setCoverLetter(sampleCoverLetter);
  }, []);

  const formatTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <p key={index} style={{ marginBottom: '0.8em', lineHeight: '1.6' }}>
        {line}
      </p>
    ));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Customized Cover Letter</h1>
      <div style={styles.letterBox}>
        {coverLetter ? formatTextWithLineBreaks(coverLetter) : <p>Loading...</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
  },
  letterBox: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#222',
  },
};

export default CustomizedCoverLetter;
