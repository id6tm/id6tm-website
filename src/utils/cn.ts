import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: (string | undefined | null | false)[]) =>
	twMerge(classNames(...classes));
