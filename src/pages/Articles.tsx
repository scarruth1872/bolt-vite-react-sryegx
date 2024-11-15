import React from 'react';
import { Clock, User, Tag } from 'lucide-react';

const Articles = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Fitness Articles</h1>
        <p className="text-gray-600 mt-2">Stay informed with the latest fitness insights and tips</p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <div className="space-y-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow p-4 sticky top-4">
            <h2 className="font-semibold mb-4">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArticleCard = ({ title, excerpt, author, date, readTime, image, tags }: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}) => (
  <article className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="md:flex">
      <div className="md:w-1/3">
        <img src={image} alt={title} className="h-48 w-full object-cover md:h-full" />
      </div>
      <div className="p-6 md:w-2/3">
        <div className="flex gap-2 text-sm text-gray-600 mb-2">
          {tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 gap-4">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readTime}
          </span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  </article>
);

const articles = [
  {
    id: '1',
    title: 'The Science Behind Effective Workouts',
    excerpt: 'Understanding the key principles that make your workouts more effective and efficient.',
    author: 'Dr. James Wilson',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Training', 'Science']
  },
  {
    id: '2',
    title: 'Nutrition Myths Debunked',
    excerpt: 'Common nutrition myths that might be holding back your fitness progress.',
    author: 'Sarah Parker',
    date: 'March 14, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Nutrition', 'Health']
  },
  {
    id: '3',
    title: 'Mental Health Benefits of Exercise',
    excerpt: 'How regular exercise can improve your mental wellbeing and reduce stress.',
    author: 'Dr. Emily Chen',
    date: 'March 13, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Mental Health', 'Wellness']
  }
];

const tags = [
  'Nutrition',
  'Strength Training',
  'Cardio',
  'Mental Health',
  'Recovery',
  'Wellness',
  'Weight Loss',
  'Muscle Gain'
];

export default Articles;