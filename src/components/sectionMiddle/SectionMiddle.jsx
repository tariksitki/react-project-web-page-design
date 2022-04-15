import { SectionMiddleComponent } from "./SectionMiddleStyles";

const SectionMiddle = () => {
  return (
    <SectionMiddleComponent>
      <div className="left">
        <h3>Subscribe To Our Newsletter</h3>
      </div>

      <div className="right">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your E-Mail"
        />
        <button type="submit">Subscribe</button>
      </div>
    </SectionMiddleComponent>
  );
};

export default SectionMiddle;
