import { UserContext } from "~/contexts/useUserContext";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import Button from "~/atoms/button/Button";

interface LilyPadProps {
  disabled?: boolean;
}
const LilyPadImage = (props: LilyPadProps) => {
  const disabled = props.disabled;
  return (
    <Image
      style={{
        filter: disabled ? "grayscale(100%)" : "none",
        WebkitFilter: disabled ? "grayscale(100%)" : "none",
      }}
      className={`${disabled ? "cursor-default" : "cursor-pointer hover:scale-110"}`}
      src="/images/items/lily-pad.png"
      alt="lily-pad"
      width={100}
      height={100}
    />
  );
};

const FrogImage = () => {
  return (
    <div className="absolute -top-8 z-10 hover:scale-110">
      <Image
        src="/images/frog/main-frog.png"
        alt="frog"
        width={100}
        height={100}
      />
    </div>
  );
};

const MainPage = () => {
  const { state } = useContext(UserContext);
  console.log(state);
  const lilyPageAnimation = useSpring({
    loop: true,
    from: { y: 0 },
    to: [
      { y: -6 }, // Move up by 10px
      { y: 0 }, // Then back to the original position
    ], // Move up by 10px
    config: {
      duration: 800, // Duration of each bounce
      friction: 10, // Adjust for more or less bouncy effect
    },
  });
  const router = useRouter();

  const goToActivity = (id: number) => {
    void router.push(`/activities/${id}`);
  };
  return (
    <main
  className="bg-fill h-screen w-screen bg-center bg-no-repeat"
  style={{
    backgroundImage: "url(/images/backgrounds/main-background.jpg)",
    backgroundSize: "100%", // Adjust this value to zoom in or out (e.g., 150%)
  }}
>
      <animated.button
        className="absolute right-[10%] top-[10%] sm:right-[85%] sm:top-[10%]"
        style={lilyPageAnimation}
        onClick={() => goToActivity(1)}
      >
        {state.completed.length === 0 && <FrogImage />}
        <LilyPadImage />
      </animated.button>
      <animated.button
        className="absolute left-[40%] top-[22%] sm:left-[20%] sm:top-[25%]"
        style={lilyPageAnimation}
        onClick={() => {
          if (!state.completed.includes("1")) return;
          goToActivity(2);
        }}
      >
        {state.completed.includes("1") && state.completed.length === 1 && (
          <FrogImage />
        )}
        <LilyPadImage disabled={!state.completed.includes("1")} />
      </animated.button>
      <animated.button
        className="absolute right-[55%] top-[30%] sm:left-[10%] sm:top-[40%]"
        style={lilyPageAnimation}
        onClick={() => {
          if (!state.completed.includes("2")) return;
          goToActivity(3);
        }}
      >
        {state.completed.includes("2") && state.completed.length === 2 && (
          <FrogImage />
        )}
        <LilyPadImage disabled={!state.completed.includes("2")} />
      </animated.button>
      <animated.button
        className="absolute right-[7%] top-[40%] sm:left-[28%] sm:top-[50%]"
        style={lilyPageAnimation}
        onClick={() => {
          if (!state.completed.includes("3")) return;
          //   goToActivity(4);
        }}
      >
        {state.completed.includes("3") && (
          <div className="absolute -left-56 -top-14 flex h-[100px] w-[200px] items-center justify-center rounded-lg bg-white">
            <div>You completed all we have right now</div>
          </div>
        )}
        {state.completed.includes("3") && state.completed.length === 3 && (
          <FrogImage />
        )}
        <LilyPadImage disabled={!state.completed.includes("3")} />
      </animated.button>
      <animated.button
        className="absolute left-[35%] top-[50%] sm:left-[45%] sm:top-[59%]"
        style={lilyPageAnimation}
        onClick={() => {
          if (!state.completed.includes("4")) return;
          goToActivity(5);
        }}
      >
        {state.completed.includes("4") && state.completed.length === 4 && (
          <FrogImage />
        )}
        <LilyPadImage disabled={!state.completed.includes("4")} />
      </animated.button>
      <animated.button
        className="absolute left-[12%] top-[60%] sm:left-[59%] sm:top-[68%]"
        style={lilyPageAnimation}
        onClick={() => {
          if (!state.completed.includes("5")) return;
          goToActivity(6);
        }}
      >
        {state.completed.includes("5") && state.completed.length === 5 && (
          <FrogImage />
        )}
        <LilyPadImage disabled={!state.completed.includes("5")} />
      </animated.button>
      <animated.button
        className="absolute right-[0%] top-[75%] sm:left-[70%] sm:top-[30%]"
        style={lilyPageAnimation}
        onClick={() => {
          if (!state.completed.includes("6")) return;
          goToActivity(7);
        }}
      >
        {state.completed.includes("6") && state.completed.length === 6 && (
          <FrogImage />
        )}
        <LilyPadImage disabled={!state.completed.includes("6")} />
      </animated.button>
      <animated.button
        className="absolute right-[0%] top-[75%] sm:left-[83%] sm:top-[40%]"
        style={lilyPageAnimation}
        onClick={() => {
          if (!state.completed.includes("7")) return;
          goToActivity(7);
        }}
      >
        {state.completed.includes("7") && state.completed.length === 7 && (
          <FrogImage />
        )}
        <LilyPadImage disabled={!state.completed.includes("7")} />
      </animated.button>
      <Button
        className="absolute bottom-5 left-5 flex items-center justify-center rounded-lg bg-[#48cad9] p-3 text-white hover:bg-[#48cad9]"
        onClick={() => {
          localStorage.clear();
          void router.reload();
        }}
      >
        Restart?
      </Button>
    </main>
  );
};

export default MainPage;
