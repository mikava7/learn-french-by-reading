import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const ChapterListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
interface ChapterItemProps {
  selected: boolean;
}

export const ChapterItem = styled.li<ChapterItemProps>`
  cursor: pointer;
  width: 100px;
  margin: 1rem;
  padding: 1rem;
  ${(props) =>
    props.selected
      ? {
          backgroundColor: "#ccc",
          borderRadius: "4px",
        }
      : {}};

  &:hover {
    background-color: #eaeaea;
  }
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
`;

export const ChapterContentContainer = styled.div`
  background-color: #f5f5f5;
  padding: 24px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ChapterTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const ChapterText = styled.span`
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 1.4;
`;
export const UnknownWordsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 3rem;
`;

export const UnknownWordsItem = styled.li`
  margin: 1rem;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  div {
    display: flex;
    flex-direction: row;
  }
  span:first-child {
    font-size: 2rem;
    margin-right: 1rem;
    font-weight: bold;
  }

  span:first-child::after {
    content: ":";
  }

  span:last-child {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    font-style: italic;
  }
`;
export const StarIcon = styled.div`
  display: flex;
  img {
    width: 20px;
    height: 20px;
    margin-left: auto;
    cursor: pointer;
    background-color: transparent;
    filter: ${(props) => (props.favorited ? "invert(50%)" : "none")};
  }
`;
export const ListenIcon = styled.div`
  display: flex;
  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    filter: ${(props) => (props.isActive ? "invert(50%)" : "none")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "scale(1.2)" : "scale(1)")};
  }
`;
export const IconsContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 1rem;
`;
