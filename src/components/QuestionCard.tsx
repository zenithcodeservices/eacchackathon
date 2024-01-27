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
        <Card className="bg-white shadow-md p-4 rounded-lg">
          <CardHeader className="mb-4">
            <CardTitle className="text-xl font-bold">{cardTitle}</CardTitle>
            <CardDescription className="text-gray-500">{cardDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base">{cardContent}</p>
          </CardContent>
          <CardFooter className="mt-4">
            <p className="text-gray-400">{cardFooter}</p>
          </CardFooter>
        </Card>
      )}
    </>
  );
};
  
QuestionCard.propTypes = {
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
  cardContent: PropTypes.string,
  cardFooter: PropTypes.string,
  isVisible: PropTypes.bool,
};
  
export default QuestionCard;
  