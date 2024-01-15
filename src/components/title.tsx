interface TitleProps {
    title: string;
}

const Title = (props: TitleProps) => {
    const { title } = props;
    return (
        <div>
            <h1 className="text-blue-400">{title}</h1>
        </div>
    );
};

export default Title;