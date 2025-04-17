import React, { useState } from "react";
import styles from "@/styles/JobList.module.css";
import { useSession } from "next-auth/react";
import SimilarityScore from "./SimilarityScore";
import { useRouter } from "next/router";

const JobList = ({ jobs }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [jobData, setJobData] = useState("");



  return (
    <div className={styles.grid}>
      {jobs.map((job) => (
        <div key={job._id} className={styles.card}>
          <h3 className={styles.cardTitle}>{job.name}</h3>
          <p className={styles.cardDescription}>{job.description}</p>
          <p className={styles.cardLocation}>
            <strong>Location:</strong> {job.location}
          </p>
          <p className={styles.cardSkills}>
            <strong>Required Skills:</strong> {job.requiredSkills.join(", ")}
          </p>
          {job.reason && <p className={styles.cardReason}>{job.reason}</p>}
          <div className={styles.buttons}>
            {status === "authenticated" && (
              <>
                <button
                  className={styles.customButton}
                  onClick={() =>
                    router.push({
                      pathname: "/customized_cover_letter",
                      query: { job: JSON.stringify(job) }, // Convert object to string
                    })
                  }
                >
                  Customize Cover Letter
                </button>

              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;