const AboutSection = () => {
	return (
		<div className="defaultContainer">
			<div className="space-y-4">
				<p>
					Hello, I'm Benjamin! I'm a first-year student interested in solving socially important problems (e.g. in healthcare and the environment) with computing, particularly with AI and computer vision.
					I'm also an outdoors & geography enthusiast, runner, and writer. 
				</p>
                {/* bold the text */}
                
                <p>
                    <strong>
                        Visit <a href = "https://docs.google.com/document/d/1rGBNSfRg_27TwEU3BC8TAr93X0xbvLYlha7TMjKU5oE" target = "_blank">this link</a> for my full resume. 
                    </strong>
                    
                </p>
			</div>
		</div>
	);
};

export default AboutSection;
