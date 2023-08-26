"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
const Navbar = () => {
  const route = useRouter();
  function navigateFunction(res) {
    route.push(res);
  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">My Website</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Project</Link>
          </li>
          <button onClick={() => navigateFunction("/projects")}>
            enter to projects
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
