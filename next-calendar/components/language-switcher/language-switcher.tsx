import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import styled from "styled-components";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const locales = router.locales as string[];

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value;
    i18n.changeLanguage(locale);

    router.push(router.asPath, router.asPath, {
      locale,
      scroll: false,
    });
  };

  return (
    <Select>
      <select value={i18n.language} onChange={onSelectChange}>
        {locales.map((locale) => (
          <option value={locale} key={locale}>
            {locale === "es"
              ? "Español"
              : locale === "ru"
              ? "Русский"
              : "English"}
          </option>
        ))}
      </select>
    </Select>
  );
};

const Select = styled.div`
  position: relative;
  & select {
    background: #0071e3;
    padding: 4px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-family: "SF-Light";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: ${({ theme }) => theme.textButton};
    cursor: pointer;
  }
`;
