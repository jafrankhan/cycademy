import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import { components } from "ComponentRenderer";
import ransomwareImg from "../cycaImages/Randsomware.png";
import { Link } from "react-router-dom";
const technicalLocalLocation = `/components/innerPages/TechnicalTopics`;

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
	${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
	${(props) =>
		props.featured &&
		css`
			${tw`w-full!`}
			${Post} {
				${tw`sm:flex-row! h-full sm:pr-4`}
			}
			${Image} {
				${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
			}
			${Info} {
				${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
			}
			${Description} {
				${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
			}
		`}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
	${(props) =>
		css`
			background-image: url("${props.imageSrc}");
		`}
	${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
	headingText = "Non Technical Topics",
	text = "Welcome ",

	posts = [
		{
			imageSrc: "https://source.unsplash.com/cAuANa0VvGw",

			title:
				"Get an headstart into understanding the different cyberthreats and how you can protect yourself.",
			description:
				"At the current times that we are living in, there have been rising cases of cyberattacks. This page would teach you on how you can protect yourself, the business the work in and your co-workers.",
			featured: true,
		},

		whatIsRansomware(),
		SettingSecure(),
		ProtectingBiz(),
		TurnOnMFA(),
		RecogniseScams(),
		Phishing(),
	],
}) => {
	const [visible, setVisible] = useState(7);
	const onLoadMoreClick = () => {
		setVisible((v) => v + 6);
	};
	return (
		<AnimationRevealPage>
			<Header />
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>{headingText}</Heading>
						<div style={{ textAlign: "right" }}>
							<Link to={technicalLocalLocation}>
								<button>Go to Technical Topics</button>
							</Link>
						</div>
					</HeadingRow>
					<Posts>
						{posts.slice(0, visible).map((post, index) => (
							<PostContainer key={index} featured={post.featured}>
								<Post className="group" as="a" href={post.url}>
									<Image imageSrc={post.imageSrc} />
									<Info>
										<Category>{post.category}</Category>
										<CreationDate>{post.date}</CreationDate>
										<Title>{post.title}</Title>
										{post.featured && post.description && (
											<Description>{post.description}</Description>
										)}
									</Info>
								</Post>
							</PostContainer>
						))}
					</Posts>
					{visible < posts.length && (
						<ButtonContainer>
							<LoadMoreButton onClick={onLoadMoreClick}>
								Load More
							</LoadMoreButton>
						</ButtonContainer>
					)}
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);
};

const getPlaceholderPost = () => ({
	imageSrc: { ransomwareImg },
	category: "Travel Guide",
	date: "April 19, 2020",
	title: "Visit the beautiful Alps in Switzerland",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	url: "https://reddit.com",
});

const whatIsRansomware = () => ({
	imageSrc: "https://imgur.com/Nn5oass.png",
	category: "Ransomware",
	date: "13 June 2023",
	title: " What is Ransomware?",
	description:
		"Discover what is Ransomware and how you can protect yourself from Ransomware!",
	url: "/components/innerPages/Ransomware2",
});

const ProtectingBiz = () => ({
	imageSrc: "https://imgur.com/9ZNNEvp.png",
	category: "Protecting Business Employees",
	date: "13 June 2023",
	title: "Protecting your business and Employees",
	description:
		"Your business and employees are vulnerable to cyber attacks from criminals who can strike at any moment. Discover ways to enhance the cybersecurity of your business and employees.",
	url: "/components/innerPages/ProtectingBusinessEmployee",
});

const SettingSecure = () => ({
	imageSrc: "https://imgur.com/dEAFE1f.png",
	category: "Paraphrases",
	date: "13 June 2023",
	title: "Setting Secure Passphrases",
	description:
		"Changing your passwords to a passphrase is a great way to improve your cybersecurity.",
	url: "/components/innerPages/SettingPassphrases",
});

const TurnOnMFA = () => ({
	imageSrc: "https://imgur.com/Im0Gqtc.png",
	category: "MFA Authentication",
	date: "13 June 2023",
	title: "MFA Authentication",
	description:
		"Learn how to better protect yourself against cyber attacks by setting up MFA",
	url: "/components/innerPages/MFAAuthentication",
});

const RecogniseScams = () => ({
	imageSrc: "https://imgur.com/6NYasKt.png",
	category: "Scams",
	date: "13 June 2023",
	title: "Recognizing and Reporting Scams",
	description:
		" Recognizing Scams and what to do if you become a victim of one",
	url: "https://reddit.com",
});

const Phishing = () => ({
	imageSrc: "https://source.unsplash.com/bCrM2e1M0a4",
	category: "Phishing",
	date: "13 June 2023",
	title: "Phishing",
	description:
		"Learn about Phishing and how you can protect yourself from Phishing",
	url: "/components/innerPages/Phishing",
});
