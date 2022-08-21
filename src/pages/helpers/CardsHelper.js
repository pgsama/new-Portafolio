import { useEffect, useRef } from "react";
import { useState } from "react";

export const CardsHelper = () => {
  const [Resumen, setResumen] = useState(true);
  const [Experiencia, setExperiencia] = useState(false);
  const [Estudios, setEstudios] = useState(false);
  const resumen = useRef();
  const experiencia = useRef();
  const estudios = useRef();

  useEffect

  const resetActive = () => {
    resumen.current.classList.remove("active-card");
    experiencia.current.classList.remove("active-card");
    estudios.current.classList.remove("active-card");
    setResumen(false);
    setExperiencia(false);
    setEstudios(false);
  };

  const setActive = ({ currentTarget }) => {
    resetActive();
    currentTarget.classList.add("active-card");
    if (currentTarget.id === "Resumen") {
      setResumen(true);
    }
    if (currentTarget.id === "Experiencia") {
      setExperiencia(true);
    }

    if (currentTarget.id === "Estudios") {
      setEstudios(true);
    }
    console.log(currentTarget.id);
  };

  return {
    resumen,
    experiencia,
    estudios,
    setActive,
    Resumen,
    Experiencia,
    Estudios,
  };
};
