import React from "react";
import { Link } from "react-router-dom";
import { Feed } from "semantic-ui-react";
import { formatDistance } from "date-fns";

export default function EventFormItem({ post }) {
  let summary;
  switch (post.code) {
    case "join-event":
      summary = (
        <>
          <Link to={`/profile/${post.userUid}`}>{post.displayName}</Link> has
          signed up to
          <Link to={`/evets/${post.eventId}`}>{post.title}</Link>
        </>
      );
      break;
    case "left-event":
      summary = (
        <>
          <Link to={`/profile/${post.userUid}`}>{post.displayName}</Link> has
          cancelled their place on
          <Link to={`/evets/${post.eventId}`}>{post.title}</Link>
        </>
      );
      break;
    default:
      summary = "Something happened";
      break;
  }

  return (
    <Feed.Event>
      <Feed.Label image={post.photoURL} />
      <Feed.Content>
        <Feed.Date>
          {formatDistance(new Date(post.date), new Date())} ago
        </Feed.Date>
        <Feed.Summary>{summary}</Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  );
}
