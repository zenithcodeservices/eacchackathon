import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PropTypes from "prop-types";
  
const QuestionCard = (props) => {
  const { cardTitle, cardDescription, cardContent, cardFooter, isVisible } = props;
  
  return (
    <>
      {isVisible && (
        <Card className="bg-white shadow-md p-4 rounded-lg"style={{ minWidth: '560px'}} >
          <CardHeader className="mb-4">
            <CardTitle className="text-xl font-bold">{cardTitle}</CardTitle>
            <CardDescription className="text-gray-500">{cardDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <div>{cardContent}</div>
          </CardContent>
          <CardFooter className="mt-4">
            <div  className="flex justify-between w-full mt-4">{cardFooter}</div>
          </CardFooter>
        </Card>
      )}
    </>
  );
};
  
QuestionCard.propTypes = {
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
  cardContent: PropTypes.node,
  cardFooter: PropTypes.node,
  isVisible: PropTypes.bool,
};
  
export default QuestionCard;
  