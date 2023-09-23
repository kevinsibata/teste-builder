"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

interface CardProps {
  title: string;
  subtitle?: string;
  image: string;
}

function Card({ title, subtitle, image }: CardProps) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.card__image}
        src={image}
        alt={title}
        width={600}
        height={100}
      />
      <div className={styles.card__texts}>
        <span className={styles.card__title}>{title}</span>
        <span className={styles.card__subtitle}>{subtitle}</span>
      </div>
    </div>
  );
}

export default Card;
