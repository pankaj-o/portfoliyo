import React from "react";
import styled, { keyframes } from "styled-components";

const myAnim = keyframes`
	0% {
		animation-timing-function: ease-in;
		opacity: 0;
		transform: translateX(250px);
	}

	38% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateX(0);
	}

	55% {
		animation-timing-function: ease-in;
		transform: translateX(68px);
	}

	72% {
		animation-timing-function: ease-out;
		transform: translateX(0);
	}

	81% {
		animation-timing-function: ease-in;
		transform: translateX(32px);
	}

	90% {
		animation-timing-function: ease-out;
		transform: translateX(0);
	}

	95% {
		animation-timing-function: ease-in;
		transform: translateX(8px);
	}

	100% {
		animation-timing-function: ease-out;
		transform: translateX(0);
	}
`;

const AnimatedComponent = styled.h1`
  animation: ${myAnim} 2s ease 0s 1 normal forwards;
  width: 100%;
  height: 100px;
  color: ${(props) => props.color};
`;

const AnimatedDiv = ({ text = "Click here", color = "red" }) => {
  return (
    <div>
      <AnimatedComponent color={color}>
        <button class="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
          {text}
        </button>
      </AnimatedComponent>
    </div>
  );
};

export default AnimatedDiv;
