import React, { Component } from "react";
import ProductBlock from "../../common/productBlock/productBlock";
import tourService from "../../../services/tourServices";
class PbSection extends Component {
  state = { tag: {}, searchTour: [] };
  componentDidMount() {
    this.getSearchTour();
  }
  async getSearchTour() {
    await this.setState({ tag: this.props.tag });
    let searchTour = await tourService.getSearchByTag(this.state.tag.title);
    await this.setState({ searchTour });
  }

  render() {
    const { tag, searchTour } = this.state;
    return searchTour[0] ? (
      <React.Fragment>
        <h2>{tag.title} 推介</h2>
        <ProductBlock
          id={searchTour[0].tourID}
          img={searchTour[0].image[0]}
          title={searchTour[0].title}
        />
        <ProductBlock
          id={searchTour[1].tourID}
          img={searchTour[1].image[0]}
          title={searchTour[1].title}
        />
        <ProductBlock
          id={searchTour[2].tourID}
          img={searchTour[2].image[0]}
          title={searchTour[2].title}
        />
        <ProductBlock
          id={searchTour[3].tourID}
          img={searchTour[3].image[0]}
          title={searchTour[3].title}
        />
        <ProductBlock
          id={searchTour[4].tourID}
          img={searchTour[4].image[0]}
          title={searchTour[4].title}
        />
      </React.Fragment>
    ) : null;
  }
}

export default PbSection;
