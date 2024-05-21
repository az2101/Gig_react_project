import { screen, render } from "@testing-library/react";
import Gig from "../src/components/Gig";
import johnMayer from "../src/assets/JohnMayer.jpeg"

test("renders with correct name, description, timedate and location", () => {
    render(<Gig 
        name="John Mayer" 
        image={johnMayer} 
        description="Join one man and his guitar for an unforgettable performance of his greatest hits." 
        timedate="Saturday, July 21, 2024, 8pm" 
        location="London O2 Arena"/>);
    
        expect(screen.getByRole("heading")).toHaveTextContent("John Mayer");
        expect(screen.getByTestId("description")).toHaveTextContent("Join one man and his guitar for an unforgettable performance of his greatest hits.");
        expect(screen.getByTestId("timedate")).toHaveTextContent("Saturday, July 21, 2024, 8pm");
        expect(screen.getByTestId("location")).toHaveTextContent("London O2 Arena");
})