import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filter";
import HomeFilters from "@/components/home/HomeFilter";
import NoResult from "@/components/shared/NoResult";
import QuestionsCard from "@/components/cards/QuestionsCard";

const questions = [
  {
    id: "1",
    title: "This is question 1",
    tags: [
      { id: "1", name: "python" },
      { id: "2", name: "sql" },
    ],
    author: {
      id: "1",
      name: "Patel Swapnil",
      picture: "https://avatars.githubusercontent.com/u/56163560?v=4",
    },
    upvotes: 100000,
    views: 10000000,
    answers: [],
    createdAt: new Date("2023-09-20T18:30:00.000Z"),
  },
  {
    id: "2",
    title: "This is question 2",
    tags: [
      { id: "1", name: "Javascript" },
      { id: "2", name: "React js" },
    ],
    author: {
      id: "2",
      name: "Patel Krish",
      picture: "https://avatars.githubusercontent.com/u/56163560?v=4",
    },
    upvotes: 5,
    views: 50,
    answers: [],
    createdAt: new Date("2021-09-20T18:30:00.000Z"),
  },
];

const page = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionsCard
              key={question.id}
              id={question.id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default page;
