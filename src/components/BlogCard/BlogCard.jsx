import { formatDataToNow } from 'helpers/data';
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  Date,
  Tag,
  UserBox,
  UserInfo,
  UserName,
} from './BlogCard.styled';

export const BlogCard = ({
  name,
  postedAt,
  poster,
  tag,
  title,
  description,
  avatar,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={title} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <Date>{formatDataToNow(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
