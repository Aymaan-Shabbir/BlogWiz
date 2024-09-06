import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold ">
                <div>
                  <h1>Welcome to BlogWiz. </h1>
                  <div style={{ width: "100%", height: "400px" }}>
                    {/* Embedding the Lottie animation using an iframe */}
                    <iframe
                      src="https://lottie.host/embed/fd3da742-af0b-49a9-becc-922d1f5f6b54/P9Ecks4NZw.json"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                      title="Lottie Animation"
                    ></iframe>
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
