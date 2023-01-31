/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import styles from "../pages/blog/blog.module.css";

const BlogCard = ({ id, index, date, image, title, description }) => {
  const router = useRouter();

  return (
    <div key={index} className={styles.card_sectionOne} onClick={() => router.push(`/blog/edit/${id}`)}>
      <div className={styles.editContainer_sectionOne}>
        <img className={styles.editIcon} src="/edit.png" alt="editIcon" />
        <p>Edit Blog</p>
      </div>
      <img className={styles.cardImage_sectionOne} src={image} alt="image_blog" />
      <h5>{date}</h5>
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  );
};

export default BlogCard;
