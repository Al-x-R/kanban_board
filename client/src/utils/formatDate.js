import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

const formatCreatedAt = (timestamp) => {
  return formatDistanceToNowStrict(new Date(timestamp), { addSuffix: true });
};

export default formatCreatedAt;