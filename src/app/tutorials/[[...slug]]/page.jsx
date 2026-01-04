import Title from "@/Components/Title";
import React from "react";

const TutorialsPage = async ({ params }) => {
  const { slug } = await params;
  const [technology, topic, , page_no, subject] = slug || [];

  return (
    <div>
      <Title>{technology} Tutorials</Title>
      <h2>{topic}</h2>
      <hr />
      <div className="flex justify-between">
        <h2 className="font-bold">{subject}</h2>
        <p className="font-bold">Page-no : {page_no}</p>
      </div>
    </div>
  );
};

export default TutorialsPage;
