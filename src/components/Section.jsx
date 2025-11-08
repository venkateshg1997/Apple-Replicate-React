
export default function Section({ title, description, image, reverse }) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center py-12 px-6`}>
       <img src={image} alt={title} className="w-64 md:w-1/3 rounded-lg shadow-md" />
      <div className="md:w-1/2 text-center md:text-center mt-6 md:mt-0">
        <h3 className="text-3xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
