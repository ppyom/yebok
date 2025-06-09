import { PostCard } from '@/components/post';
import { Inner } from '@/components/layout';

export default function Page() {
  const { data } = {
    data: {
      id: '1',
      images: [
        '/yebok.jpeg',
        '/yebok.jpeg',
        '/yebok.jpeg',
        '/yebok.jpeg',
        '/yebok.jpeg',
        '/yebok.jpeg',
        '/yebok.jpeg',
        '/yebok.jpeg',
      ],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero sem, vehicula sit amet sem sit amet, tincidunt scelerisque nunc. Sed vulputate hendrerit risus aliquet mattis. Proin a mauris ligula. Pellentesque id aliquam enim, at pellentesque nisl. Nullam mattis, quam sed fermentum consequat, nunc augue iaculis nulla, non mollis nisi sapien quis tortor. Nunc orci eros, interdum quis ante vel, iaculis rhoncus orci. Fusce eget aliquet libero.\n\nEtiam non dapibus urna, et pellentesque quam. Etiam molestie egestas imperdiet. Ut pharetra metus laoreet lacus interdum, eu convallis metus pharetra. Integer sapien nisi, vehicula nec hendrerit sed, mattis non eros. Nullam at est commodo, viverra tellus quis, vestibulum nunc. Vestibulum id porta lacus. Morbi lorem turpis, suscipit ac enim quis, sollicitudin tristique metus.\n\nInteger ultrices ante vel porttitor dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis et felis a lacus tristique pharetra nec id augue. Sed pharetra dictum felis, lobortis fermentum magna maximus et. Phasellus a faucibus sem, id pulvinar magna. Sed ipsum mi, consectetur at viverra ac, feugiat id nibh. Nunc luctus consectetur nibh, in cursus erat ultricies quis. Praesent in sodales metus. Cras et fermentum nisi, tempus consectetur ex. Mauris pretium nunc sed feugiat pretium.\n\nSed condimentum maximus dui vitae auctor. Praesent nec tincidunt velit, et faucibus magna. Aliquam aliquam vestibulum blandit. Integer finibus sagittis metus eu eleifend. Etiam nec leo ex. Sed et venenatis diam. Etiam quam nulla, tristique sed velit nec, bibendum fringilla orci. Pellentesque at dapibus elit. Proin sed diam quam. Mauris tempor, quam nec mattis fringilla, lacus ante aliquet ante, sit amet rhoncus lacus sem at enim. Suspendisse potenti. Vivamus viverra in ante a scelerisque.\n\nDonec elementum, sapien ut luctus lobortis, dui arcu facilisis orci, at porta ante magna nec metus. Quisque tincidunt, massa id hendrerit porttitor, ipsum tortor imperdiet elit, eget bibendum turpis sem vel ante. Nulla euismod pellentesque est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum iaculis est, vel cursus tellus blandit ac. Aenean ultricies tincidunt convallis. Aenean gravida id enim eu posuere. Nunc tempor pellentesque convallis. Aenean non erat convallis, scelerisque diam eu, interdum lorem. In hac habitasse platea dictumst. Morbi accumsan ultrices lacus, vel ultricies ex sodales a. Aliquam eget convallis quam. Fusce molestie sit amet elit eget mollis. In et dui arcu. Fusce quis est et elit sollicitudin sodales.',
      createdAt: new Date().toLocaleString(),
    },
  };

  return (
    <Inner className="overflow-hidden p-0">
      <PostCard {...data} isFull={true} />
    </Inner>
  );
}
