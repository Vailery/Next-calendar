import styles from "./error.module.css";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Button } from "../button/button";
import styled from "styled-components";

export const Error = () => {
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (container.current) {
      const animation = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./puzzle.json"),
      });

      return () => animation.destroy();
    }
  }, []);

  return (
    <div className={styles.main}>
      <ErrorMessage>
        If you see this page, it means that there is <span>no such page</span>
        ...
      </ErrorMessage>
      <div ref={container} className={styles.image} />
      <Button
        text="Go back"
        onClick={() => {
          router.back();
        }}
      />
    </div>
  );
};

const ErrorMessage = styled.p`
  font-family: "SF-Regular";
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.text};
  white-space: nowrap;
  & span {
    color: #ee5c51;
    font-style: italic;
  }
`;
