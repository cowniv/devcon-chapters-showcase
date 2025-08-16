import { Link } from "react-router-dom";
import { findChapter, programs, stories } from "../data";

export default function SheIsDevcon() {
  return (
    <>
      <section className="rounded-3xl bg-gradient-to-br from-she to-purple-700 p-8 text-white sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-pink-100">Community feature</p>
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">She Is DEVCON</h1>
        <p className="mt-4 max-w-2xl text-lg text-pink-50">
          Celebrating the women who organize, speak, mentor and build across our chapters, and making
          it easier for the next ones to show up.
        </p>
        <a
          href="#stories"
          className="mt-6 inline-block rounded-full bg-white px-5 py-2 font-semibold text-she hover:bg-pink-50"
        >
          Read their stories
        </a>
