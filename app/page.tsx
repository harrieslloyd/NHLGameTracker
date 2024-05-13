"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, MAX, TNT, TRUTV, SN, TVAS, BSSO, TBS, MNMT, MSG } from "@/components/icons";
import clsx from "clsx";
import { Card, CardHeader, CardBody, CardFooter, Chip, Badge, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { useRef, useEffect } from "react";
import colors from '../teamcolors.json'


export default function Home() {

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div>
				<h1 className={
					clsx(title({ color: "green" }))
				}>Games Today</h1>
				<div className="flex gap-4 items-center justify-center p-5">
						<Card className="p-2 max-w-xs">
							<CardHeader className="flex gap-4 flex-row items-center justify-center"><Chip className="bg-WPG text-lg p-3 text-white" variant="flat">WPG</Chip> @ <Chip className="bg-COL text-lg p-3 text-white" variant="flat">COL</Chip></CardHeader>

							<CardBody className="p-4">
								<Badge content="LIVE" className="text-background px-2" shape="rectangle" color="success">
									<div className="bg-white text-black border-2 border-foreground rounded-md p-6 flex flex-col gap-4 items-center w-full justify-center">
										<h1 className={clsx(title({size: "md", color: "foreground"}))}>
											<Popover showArrow placement="bottom" ><PopoverTrigger><span className="px-3 hover:opacity-70 duration-300">1</span></PopoverTrigger><PopoverContent><div>This is who scored</div></PopoverContent></Popover>
											-
											<Popover showArrow placement="bottom" ><PopoverTrigger><span className="px-3 hover:opacity-70 duration-300">4</span></PopoverTrigger><PopoverContent><div>This is who scored</div></PopoverContent></Popover>
										</h1>
									</div>
								</Badge>
							</CardBody>
							<CardFooter className="flex flex-col gap-1">
								<div className="border-2 border-foreground/50 rounded-md p-2 m-1 w-fit"><span className=""><span className="font-bold">COL</span> leads 2-1</span></div>
								<div className="border-2 border-foreground/50 rounded-md p-2 m-1 w-fit flex flex-row flex-wrap gap-3 justify-center items-center">
									<TNT size={15} />
									<TRUTV size={15} color="background" />
									<MAX size={15} /> 
									<SN size={15} />
									<TVAS size={15} />
									<BSSO size={15} />
									<TBS size={15} />
									<MNMT size={15} />
									<MSG size={15} />
									</div>
							</CardFooter>
						</Card>
				</div>
			</div>
		</section>
	);
}
