"use client";

import Cards from "./components/Cards";
import { ChangeEvent, useState } from "react";
import Achievement from "./components/Achievement";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Footer from "./components/Footer";
import Image from "next/image";
import Logo from "./components/Logo";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const tourism = [
    ["Eco Tourism", "Lets enjoy the nature", "/background1.jpg"],
    ["Nature Tourism", "Lets enjoy the nature", "/background1.jpg"],
    [
      "Cultural Tourism",
      "Lets take you through vibrant cultures",
      "/background1.jpg",
    ],
    [
      "Wild life Tourism",
      "go on a trip with advanture and thrill",
      "/background1.jpg",
    ],
    [
      "Religious Tourism",
      "Take some time to enjoy the peace",
      "/background1.jpg",
    ],
  ];
  const router = useRouter();
  const [location, setLocation] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState<string | null>(null);
  const [interests, setInterests] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>("5000");
  const food = "Veg";

  const { user, isSignedIn } = useUser();

  function handleDestinationChange(event: ChangeEvent<HTMLInputElement>): void {
    setLocation(event.target.value);
  }

  function handleDateChange(event: ChangeEvent<HTMLInputElement>): void {
    setDate(event.target.value);
    console.log(isFutureDate(event.target.value));
  }

  function handleInterestChange(event: ChangeEvent<HTMLInputElement>): void {
    setInterests(event.target.value);
  }

  function handleTimeChange(event: ChangeEvent<HTMLInputElement>): void {
    setTime(event.target.value);
  }

  function handleBudgetChange(event: ChangeEvent<HTMLInputElement>): void {
    setBudget(event.target.value);
  }

  function isFutureDate(dateString: string): boolean {
    const inputDate = new Date(dateString);
    const today = new Date();

    // Reset time to avoid issues with different time zones
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);

    return inputDate > today; // Ensures the date is today or in the future
  }

  async function handleSubmit() {
    if (location == null || date == null || time == null || interests == null) {
      toast.error("Please fill all values before submitting !");
      return;
    }
    if (!isFutureDate(date)) {
      toast.error("Please Enter Valid Date !");
      return;
    }
    if (Number(budget!) < 5000) {
      toast.error("Minimum Trip Budget must be 5000");
      return;
    }
    if (Number(time) <= 0) {
      toast.error("Trip duration must be atleast 1 day");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        "https://new-ucyk.onrender.com/api/travel_requests/",
        {
          user_id: user?.id,
          city: location,
          interests: interests,
          travel_date: date,
          travel_duration: time,
          avg_budget: budget,
          food_prefference: food,
        }
      );
      console.log(response);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setLoading(false);
      router.push(`/${user?.id}`);
    }
  }

  return (
    <>
      <div className="w-screen  h-full font-sans bg-white flex-col items-center justify-center">
        <div className="w-screen h-screen relative">
          <div className="absolute inset-0 duration-1000 ">
            <video
              src="/tour22.mp4"
              loop={true}
              autoPlay={true}
              muted={true}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="pt-30 flex flex-col absolute bottom-0   gap-10 items-center lg:items-start justify-end  lg:p-30 p-20">
            <div className=" flex flex-col gap-10 mt-16 ">
              <h1 className="  ">
                <Logo />
              </h1>

              <h2 className="lg:pl-[30%] ml-0 lg:ml-10% pl-[5%]  poppins-thin tgowild font-stretch-ultra-expanded   lg:text-3xl flex items-end justify-end  ">
                Let &apos;s personalise your travels
              </h2>
            </div>
            <div className="lg:px-45 py-7 ">
              {isSignedIn ? (
                <Link
                  href={`/${user?.id}`}
                  type="button"
                  className="lg:text-2xl hover:cursor-pointer   lg:px-3 text-lg text-white w-40 bg-[#c56c30f3] lg:w-50 py-3 border-1 rounded-sm hover:bg-white hover:text-[#c56c30d2] hover:shadow-2xs shadow-[#c56c3066] hover:scale-105 transition-all "
                >
                  Check out your trips
                </Link>
              ) : (
                <button
                  onClick={() => {
                    router.push("/sign-in");
                  }}
                  type="button"
                  className="lg:text-2xl hover:cursor-pointer  lg:px text-lg text-white w-40 bg-[#c56b30] lg:w-50 py-3 border-1 rounded-sm hover:bg-white hover:text-[#c3604a] hover:shadow-2xs shadow-[#c38f4a] hover:scale-105 transition-all "
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="h-screen relative  text-sm lg:text-xl  w-screen  py-10 lg:py-20 flex flex-col items-center justify-center bg-white text-black z-10">
          <div className="absolute inset-0 duration-300 ">
            <Image
              src={"/wmp.png"}
              alt="wmp"
              layout="fill"
              objectFit="cover"
              className="relative opacity-15 h-fit -z-10"
            />
          </div>

          <div className="flex absolute top-15 lg:top-60 flex-col items-center gap-1 ">
            <div className="flex flex-col lg:flex-row items-center gap-1">
              <div className="grid lg:grid-rows-1 lg:grid-cols-5 grid-cols-2 gap-4 p-4">
                <div className="   w-20 h-15 lg:w-50 xl:w-60 lg:h-20 hover:shadow-2xl hover:scale-105 shadow-[#c38f4a] p-3 transition-all flex flex-col items-center justify-center outline-[#c38f4a]  text-[#c38f4a] border border[#c38f4a]">
                  <input
                    type="text"
                    placeholder="Destination"
                    className="outline-none w-full "
                    onChange={handleDestinationChange}
                  ></input>
                </div>
                <div className="     w-20 h-15 lg:w-50 xl:w-60 lg:h-20 hover:shadow-2xl hover:scale-105 shadow-[#c38f4a] p-3 transition-all flex flex-col items-center justify-center text-[#c38f4a] border border[#c38f4a]">
                  <input
                    type="date"
                    placeholder="Date"
                    className="outline-none w-full "
                    onChange={handleDateChange}
                  ></input>
                </div>
                <div className="    w-20 h-15 lg:w-50 xl:w-60 lg:h-20 hover:shadow-2xl hover:scale-105 shadow-[#c38f4a] p-3 transition-all flex flex-col items-center justify-center text-[#c38f4a] border border[#c38f4a]">
                  <input
                    type="text"
                    placeholder="Travel Interests"
                    className="outline-none w-full "
                    onChange={handleInterestChange}
                  ></input>
                </div>
                <div className="    w-20 h-15 lg:w-50 xl:w-60 lg:h-20 hover:shadow-2xl hover:scale-105 shadow-[#c38f4a] p-3 transition-all flex flex-col items-center justify-center text-[#c38f4a] border border[#c38f4a]">
                  <input
                    type="number"
                    min={2}
                    placeholder="Travel Days"
                    className="outline-none w-full "
                    onChange={handleTimeChange}
                  ></input>
                </div>

                <div className="    w-20 h-15 lg:w-50 xl:w-60 lg:h-20 hover:shadow-2xl hover:scale-105 shadow-[#c38f4a] p-3 transition-all flex flex-col items-center justify-center text-[#c38f4a] border border[#c38f4a]">
                  <input
                    type="number"
                    placeholder="Budget"
                    min={5000}
                    className="outline-none w-full "
                    onChange={handleBudgetChange}
                  ></input>
                </div>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="     w-20 h-15 lg:w-60  xl:w-70 lg:h-20 hover:shadow-2xl hover:scale-105 bg-[#c38f4a] hover:bg-white shadow-[#c38f4a] p-3 transition-all z-8 flex flex-col items-center justify-center text-white  hover:text-[#c38f4a] border border-[#c38f4a]"
            >
              Your Perfect Plan
            </button>
          </div>
        </div>

        <div className="flex flex-col w-screen h-screen max-h-[800] xl:flex-row items-center gap-20 relative ">
          <div className="absolute inset-0 duration-300 bg-[#080000d4]">
            <Image
              src={"/background1.jpg"}
              alt="bg"
              objectFit="cover"
              layout="fill"
              className="relative peer-focus-visible: opacity-20"
            />
          </div>

          <div className=" w-screen absolute text-left center z-10 m-2 h-fit flex flex-col  lg:flex-row items-center justify-items-start text-[#c56b30] text-lg lg:text-2xl gap-10">
            <div className="md:px-5 py-2 rounded-lg  text-4xl lg:text-6xl xl:text-9xl w-fit max-w-200 text-wrap text-left h-fit">
              About Company
            </div>
            <div className="h-fit w-fit overflow-hidden ">
              <div className="flex w-screen lg:w-145 xl:w-175 scroll-anim 2xl:w-200 flex-row place-items-center justify-items-start gap-10">
                <div className="flex flex-col items-center p-3   rounded-xl gap-5 max-w-100 min-w-70 h-100 hover:bg-[#231b1566]     text-white  bg-[#38230816] border  border-[#ffffff41] hover:text-white text-sm lg:text-xl">
                  <div className="w-30 h-30 hover:animate-bounce rounded-[100%] bg-[#c38f4a65] flex justify-center items-center  border border-white">
                    <Image
                      src={"/traveler.svg"}
                      alt=""
                      width={150}
                      height={150}
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-full h-fit text-wrap ">
                    At TravelSiders, we believe that travel is more than just a
                    journey—it&apos;s an experience that transforms you. With years
                    of expertise, we curate unforgettable trips tailored to your
                    needs.
                  </div>
                </div>

                <div className="flex flex-col items-center p-3 rounded-xl gap-5 max-w-100 min-w-70 h-100 hover:bg-[#231b1566]     text-white  bg-[#38230816] border  border-[#ffffff41] hover:text-white text-sm lg:text-xl">
                  <div className="w-30 h-30 hover:animate-bounce rounded-[100%] bg-[#c38f4a65] flex justify-center items-center  border border-white">
                    <Image
                      src={"/personalize.svg"}
                      alt=""
                      width={150}
                      height={150}
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-full h-fit text-wrap ">
                    Our goal is to simplify travel planning by offering
                    personalized, hassle-free experiences. From adventure
                    getaways to relaxing retreats, we ensure every trip is
                    extraordinary.
                  </div>
                </div>

                <div className="flex flex-col items-center p-3 rounded-xl gap-5 max-w-100 min-w-70 h-100 hover:bg-[#231b1566]     text-white  bg-[#38230816] border  border-[#ffffff41] hover:text-white text-sm lg:text-xl">
                  <div className="w-30 h-30 hover:animate-bounce rounded-[100%] bg-[#c38f4a65] flex justify-center items-center  border border-white">
                    <Image
                      src={"/support.svg"}
                      alt=""
                      width={150}
                      height={150}
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-full h-fit text-wrap ">
                    We provide expert guidance, exclusive deals, and 24/7
                    customer support, ensuring a smooth and delightful travel
                    experience every time.
                  </div>
                </div>

                <div className="flex flex-col items-center p-3 rounded-xl gap-5 max-w-100 min-w-70 h-100 hover:bg-[#231b1566]     text-white  bg-[#38230816] border  border-[#ffffff41] hover:text-white text-sm lg:text-xl">
                  <div className="w-30 h-30 hover:animate-bounce rounded-[100%] bg-[#c38f4a65]  flex justify-center items-center border border-white">
                    <Image
                      src={"/trip.svg"}
                      alt=""
                      width={150}
                      height={150}
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-full h-fit text-wrap ">
                    Whether you&apos;re a solo traveler, a couple, or a family, we
                    bring you the best travel experiences with comfort and ease.
                    Your dream vacation starts here!
                  </div>
                </div>
                <div className="flex flex-col items-center p-3   rounded-xl gap-5 max-w-100 min-w-70 h-100 hover:bg-[#231b1566]     text-white  bg-[#38230816] border  border-[#ffffff41] hover:text-white text-sm lg:text-xl">
                  <div className="w-30 h-30 hover:animate-bounce rounded-[100%] bg-[#c38f4a65] flex justify-center items-center  border border-white">
                    <Image
                      src={"/traveler.svg"}
                      alt=""
                      width={150}
                      height={150}
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-full h-fit text-wrap ">
                    At TravelSiders, we believe that travel is more than just a
                    journey—it&apos;s an experience that transforms you. With years
                    of expertise, we curate unforgettable trips tailored to your
                    needs.
                  </div>
                </div>

                <div className="flex flex-col items-center p-3 rounded-xl gap-5 max-w-100 min-w-70 h-100 hover:bg-[#231b1566]     text-white  bg-[#38230816] border  border-[#ffffff41] hover:text-white text-sm lg:text-xl">
                  <div className="w-30 h-30 hover:animate-bounce rounded-[100%] bg-[#c38f4a65] flex justify-center items-center   border border-white">
                    <Image
                      src={"/personalize.svg"}
                      alt=""
                      width={150}
                      height={150}
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-full h-fit text-wrap ">
                    Our goal is to simplify travel planning by offering
                    personalized, hassle-free experiences. From adventure
                    getaways to relaxing retreats, we ensure every trip is
                    extraordinary.
                  </div>
                </div>

                <div className="flex flex-col items-center p-3 rounded-xl gap-5 max-w-100 min-w-70 h-100 hover:bg-[#231b1566]     text-white  bg-[#38230816] border  border-[#ffffff41] hover:text-white text-sm lg:text-xl">
                  <div className="w-30 h-30 hover:animate-bounce rounded-[100%] bg-[#c38f4a65] flex justify-center items-center   border border-white">
                    <Image
                      src={"/support.svg"}
                      alt=""
                      width={150}
                      height={150}
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-full h-fit text-wrap  ">
                    We provide expert guidance, exclusive deals, and 24/7
                    customer support, ensuring a smooth and delightful travel
                    experience every time.
                  </div>
                </div>

                <div className="flex flex-col items-center p-3 rounded-xl gap-5 max-w-100 min-w-70 h-100 hover:bg-[#231b1566]     text-white  bg-[#38230816] border  border-[#ffffff41] hover:text-white text-sm lg:text-xl">
                  <div className="w-30 h-30 hover:animate-bounce rounded-[100%] bg-[#c38f4a65]  flex justify-center items-center border border-white">
                    <Image
                      src={"/trip.svg"}
                      alt=""
                      width={150}
                      height={150}
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-full h-fit text-wrap ">
                    Whether you&apos;re a solo traveler, a couple, or a family, we
                    bring you the best travel experiences with comfort and ease.
                    Your dream vacation starts here!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 py-10 w-screen h-full  flex items-center justify-center mt-10 lg:mt-30 ">
        <div className="px-5 py-2 rounded-lg lg:text-3xl font-extrabold bg-[#c38f4a65]   text-[#c38f4a]   w-fit text-center h-full">
          popular activities
        </div>
      </div>

      <div className="overflow-x-auto ">
        <div className="w-fit mx-5 lg:mx-10 flex flex-row gap-15 mb-20 mt-5">
          <Cards
            title="eco tourism"
            description="lets plan you a holiday to kolkota"
            image="/background1.jpg"
            link="/"
          />
          {tourism.map((item) => (
            <Cards
              key={item[0]}
              title={item[0]}
              description={item[1]}
              image={item[2]}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between">
        <div className="text-3xl font-extrabold text-black">Achievements</div>
        <div className="w-full y-fit flex flex-col items-center overflow-x-auto ">
          <div className="flex flex-row items-center  w-fit h-fit my-15 gap-15 ">
            <Achievement
              num={2000}
              sign="+"
              image="/traveller.svg"
              title="happy travelers"
            />
            <Achievement
              num={136}
              sign="+"
              image="/tour.svg"
              title="tours success"
            />
            <Achievement
              num={99}
              sign="%"
              image="/reviews.svg"
              title="positive reviews"
            />
            <Achievement
              num={62}
              sign="+"
              image="/awards.svg"
              title="award winning"
            />
          </div>
        </div>
      </div>

      <Footer />
      <div
        className={`fixed top-0 left-0  w-screen z-50 ${
          loading ? "h-screen" : "h-0"
        } bg-[#00000044] flex ${
          loading ? "visible" : "hidden"
        } justify-center items-center`}
      >
        <div className="loader"></div>
      </div>
      <Toaster />
    </>
  );
}
