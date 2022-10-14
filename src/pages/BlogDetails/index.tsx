import { CSSProperties, FunctionComponent, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "../../state/hooks";
import { useDispatch } from "react-redux";
import { fetchblog } from "../../state/slices";
import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";
import { Chip, EmptyList } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";

interface BlogDetailsProps {}

const BlogDetails: FunctionComponent<BlogDetailsProps> = () => {
  const { id } = useParams();
  const { blog, isLoading, error } = useSelector((state) => state.blog);
  console.log(error);
  const {
    title,
    subCategory: subCG,
    createtime: createTs,
    content,
    coverUrl,
  } = blog || {};

  const subCategory = subCG ? subCG.split(",") : subCG;
  const createtime = new Date(createTs).toLocaleString();

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchblog(id));
  }, [dispatch, id]);

  return (
    <div>
      <CustomLink to="/">
        <span>&#8592;</span> Go Back
      </CustomLink>
      {isLoading ? (
        <CenterBox>
          <HashLoader
            loading={isLoading}
            cssOverride={override}
            color={"#0f52ba"}
          />
        </CenterBox>
      ) : error ? (
        <Error>
          <FontAwesomeIcon icon={faBug} color={"#f50202"} />
          <ErrorText>{error}</ErrorText>
        </Error>
      ) : blog ? (
        <div>
          <Header>
            <BlogDate>Published at {createtime}</BlogDate>
            <h1>{title}</h1>
            <CategoryWrapper>
              {subCategory &&
                subCategory.map((category: string, index: number) => (
                  <ChipWrapper>
                    <Chip key={index} label={category} />
                  </ChipWrapper>
                ))}
            </CategoryWrapper>
          </Header>
          <Cover src={coverUrl} alt="cover" />
          <Content>{content}</Content>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export { BlogDetails };

const Error = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const ErrorText = styled.span`
  display: inline-block;
  margin-left: 30rem;
`;

const Cover = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 20px;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  color: #a9a9a9;
  font-weight: 500;
  margin-bottom: 2rem;
  display: block;
`;

const Header = styled.header`
  text-align: center;
`;

const BlogDate = styled.p`
  font-size: 0.8rem;
  color: #a9a9a9;
  font-weight: 500;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ChipWrapper = styled.div`
  margin: 1rem 0.5rem;
`;

const Content = styled.p`
  padding: 1rem;
  margin-top: 0.3rem;
`;

const CenterBox = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
